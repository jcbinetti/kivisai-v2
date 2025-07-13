import { type NextRequest, NextResponse } from "next/server"
import { config } from "@/lib/config"

// Graph Commons API mit Authentifizierung
const getAuthenticatedGraph = async (graphId: string) => {
  const { username, password } = config.graphCommons

  if (!username || !password) {
    throw new Error("Graph Commons credentials not configured")
  }

  // Erstelle Basic Auth Header
  const credentials = Buffer.from(`${username}:${password}`).toString("base64")

  const endpoints = [
    `https://graphcommons.com/api/v1/graphs/${graphId}`,
    `https://api.graphcommons.com/v1/graphs/${graphId}`,
  ]

  let lastError: Error | null = null

  for (const endpoint of endpoints) {
    try {
      console.log(`Trying authenticated endpoint: ${endpoint}`)

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Basic ${credentials}`,
          "User-Agent": "KIVISAI-Network-Viewer/1.0",
        },
      })

      console.log(`Response status: ${response.status}`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text()
        console.log(`Non-JSON response from ${endpoint}:`, text.substring(0, 200))
        throw new Error(`Expected JSON but got ${contentType}`)
      }

      const jsonResponse = await response.json()
      console.log(`Successfully fetched authenticated graph from ${endpoint}`)

      // Handle different response structures
      return jsonResponse.graph || jsonResponse.data || jsonResponse
    } catch (error) {
      console.log(`Failed with authenticated endpoint ${endpoint}:`, error)
      lastError = error instanceof Error ? error : new Error(String(error))
      continue
    }
  }

  throw lastError || new Error("All authenticated endpoints failed")
}

// Fallback für öffentliche Graphs
const getPublicGraph = async (graphId: string) => {
  const endpoints = [
    `https://graphcommons.com/api/v1/graphs/${graphId}`,
    `https://graphcommons.com/graphs/${graphId}.json`,
  ]

  let lastError: Error | null = null

  for (const endpoint of endpoints) {
    try {
      console.log(`Trying public endpoint: ${endpoint}`)

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "KIVISAI-Network-Viewer/1.0",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Expected JSON but got ${contentType}`)
      }

      const jsonResponse = await response.json()
      return jsonResponse.graph || jsonResponse.data || jsonResponse
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))
      continue
    }
  }

  throw lastError || new Error("All public endpoints failed")
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const graphId =
      searchParams.get("graphId") || config.graphCommons.defaultGraphId || "8eab6295-7ca6-4034-aec1-b271087edc5f"

    console.log(`Fetching graph ${graphId}`)

    try {
      // Versuche zuerst authentifizierte Anfrage
      const graphData = await getAuthenticatedGraph(graphId)
      console.log(
        `Successfully fetched authenticated graph: ${graphData.name} with ${graphData.nodes?.length || 0} nodes`,
      )

      return NextResponse.json({
        success: true,
        data: graphData,
        meta: {
          nodeCount: graphData.nodes?.length || 0,
          edgeCount: graphData.edges?.length || 0,
          fetchedAt: new Date().toISOString(),
          graphId: graphId,
          isAuthenticated: true,
          source: "authenticated_api",
        },
      })
    } catch (authError) {
      console.log("Authenticated API failed, trying public API:", authError)

      try {
        // Fallback zu öffentlicher API
        const graphData = await getPublicGraph(graphId)
        console.log(`Successfully fetched public graph: ${graphData.name} with ${graphData.nodes?.length || 0} nodes`)

        return NextResponse.json({
          success: true,
          data: graphData,
          meta: {
            nodeCount: graphData.nodes?.length || 0,
            edgeCount: graphData.edges?.length || 0,
            fetchedAt: new Date().toISOString(),
            graphId: graphId,
            isAuthenticated: false,
            source: "public_api",
          },
        })
      } catch (publicError) {
        throw publicError
      }
    }
  } catch (error) {
    console.error("Graph Commons API Error:", error)

    return NextResponse.json(
      {
        error: "Failed to fetch graph data",
        details: error instanceof Error ? error.message : "Unknown error",
        graphId: request.nextUrl.searchParams.get("graphId") || config.graphCommons.defaultGraphId,
        suggestedActions: [
          "1. Check Graph Commons credentials (GC_USERNAME, GC_PASSWORD)",
          "2. Verify the graph ID is correct",
          "3. Ensure the graph exists and is accessible",
          "4. Check if the graph is private and requires authentication",
        ],
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { graphId } = body

    if (!graphId) {
      return NextResponse.json({ error: "Graph ID is required" }, { status: 400 })
    }

    try {
      const graphData = await getAuthenticatedGraph(graphId)
      return NextResponse.json({
        success: true,
        data: graphData,
        meta: {
          nodeCount: graphData.nodes?.length || 0,
          edgeCount: graphData.edges?.length || 0,
          fetchedAt: new Date().toISOString(),
          isAuthenticated: true,
          source: "authenticated_api",
        },
      })
    } catch (authError) {
      const graphData = await getPublicGraph(graphId)
      return NextResponse.json({
        success: true,
        data: graphData,
        meta: {
          nodeCount: graphData.nodes?.length || 0,
          edgeCount: graphData.edges?.length || 0,
          fetchedAt: new Date().toISOString(),
          isAuthenticated: false,
          source: "public_api",
        },
      })
    }
  } catch (error) {
    console.error("Graph Commons API Error:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch graph data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
