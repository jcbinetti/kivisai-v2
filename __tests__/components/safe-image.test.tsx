import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import SafeImage from "@/components/safe-image"
import jest from "jest"

// Mock Next.js Image component
jest.mock("next/image", () => {
  return function MockImage({ src, alt, onError, onLoad, ...props }: any) {
    return <img src={src || "/placeholder.svg"} alt={alt} onError={onError} onLoad={onLoad} {...props} />
  }
})

describe("SafeImage", () => {
  beforeEach(() => {
    // Clear console warnings for clean test output
    jest.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("renders image with correct src and alt", () => {
    render(<SafeImage src="/test-image.jpg" alt="Test image" width={200} height={200} />)

    const image = screen.getByAltText("Test image")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "/test-image.jpg")
  })

  it("shows loading state initially", () => {
    render(<SafeImage src="/test-image.jpg" alt="Test image" width={200} height={200} />)

    // Image should start with opacity-0 (loading state)
    const image = screen.getByAltText("Test image")
    expect(image).toHaveClass("opacity-0")
  })

  it("handles image load successfully", async () => {
    render(<SafeImage src="/test-image.jpg" alt="Test image" width={200} height={200} />)

    const image = screen.getByAltText("Test image")

    // Simulate successful image load
    fireEvent.load(image)

    await waitFor(() => {
      expect(image).toHaveClass("opacity-100")
    })
  })

  it("handles image error with fallback", async () => {
    render(<SafeImage src="/broken-image.jpg" alt="Test image" fallbackSrc="/fallback.jpg" width={200} height={200} />)

    const image = screen.getByAltText("Test image")

    // Simulate image error
    fireEvent.error(image)

    await waitFor(() => {
      expect(image).toHaveAttribute("src", "/fallback.jpg")
    })
  })

  it("shows fallback icon when no fallback src provided", async () => {
    render(<SafeImage src="/broken-image.jpg" alt="Test image" width={200} height={200} />)

    const image = screen.getByAltText("Test image")

    // Simulate image error
    fireEvent.error(image)

    await waitFor(() => {
      expect(screen.getByRole("img", { name: /bild konnte nicht geladen werden/i })).toBeInTheDocument()
    })
  })

  it("attempts path correction for legacy paths", async () => {
    render(
      <SafeImage
        src="Kivisai_june-fork-of-website-nach-pdf/public/images/test.jpg"
        alt="Test image"
        width={200}
        height={200}
      />,
    )

    const image = screen.getByAltText("Test image")

    // Simulate image error to trigger path correction
    fireEvent.error(image)

    await waitFor(() => {
      expect(image).toHaveAttribute("src", "/images/test.jpg")
    })
  })

  it("respects retry count limit", async () => {
    const consoleSpy = jest.spyOn(console, "warn")

    render(<SafeImage src="/broken-image.jpg" alt="Test image" retryCount={1} width={200} height={200} />)

    const image = screen.getByAltText("Test image")

    // Simulate multiple errors
    fireEvent.error(image)
    fireEvent.error(image)
    fireEvent.error(image)

    // Should only log warnings up to retry count
    expect(consoleSpy).toHaveBeenCalledTimes(2) // Initial + 1 retry
  })

  it("applies custom className", () => {
    render(<SafeImage src="/test-image.jpg" alt="Test image" className="custom-class" width={200} height={200} />)

    const image = screen.getByAltText("Test image")
    expect(image).toHaveClass("custom-class")
  })

  it("provides proper accessibility attributes", () => {
    render(<SafeImage src="/broken-image.jpg" alt="Test image" width={200} height={200} />)

    const image = screen.getByAltText("Test image")
    fireEvent.error(image)

    // Check for screen reader text
    expect(screen.getByText("Bild nicht verfügbar: Test image")).toHaveClass("sr-only")
  })
})
