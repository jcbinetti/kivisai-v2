import {
  validateEmail,
  validatePhone,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateUrl,
  sanitizeInput,
} from "@/lib/validation"

describe("Validation Functions", () => {
  describe("validateEmail", () => {
    it("validates correct email addresses", () => {
      const validEmails = [
        "test@example.com",
        "user.name@domain.co.uk",
        "firstname+lastname@company.org",
        "test123@test-domain.com",
      ]

      validEmails.forEach((email) => {
        const result = validateEmail(email)
        expect(result.isValid).toBe(true)
        expect(result.error).toBeUndefined()
      })
    })

    it("rejects invalid email addresses", () => {
      const invalidEmails = ["invalid-email", "@domain.com", "user@", "user..name@domain.com", "user@domain", ""]

      invalidEmails.forEach((email) => {
        const result = validateEmail(email)
        expect(result.isValid).toBe(false)
        expect(result.error).toBeDefined()
      })
    })
  })

  describe("validatePhone", () => {
    it("validates German phone numbers", () => {
      const validPhones = [
        "+49 30 12345678",
        "030 12345678",
        "+49-30-12345678",
        "0049 30 12345678",
        "+49 (0)30 12345678",
      ]

      validPhones.forEach((phone) => {
        const result = validatePhone(phone)
        expect(result.isValid).toBe(true)
        expect(result.error).toBeUndefined()
      })
    })

    it("rejects invalid phone numbers", () => {
      const invalidPhones = ["123", "abc-def-ghij", "+49 30 123", "", "++49 30 12345678"]

      invalidPhones.forEach((phone) => {
        const result = validatePhone(phone)
        expect(result.isValid).toBe(false)
        expect(result.error).toBeDefined()
      })
    })
  })

  describe("validateRequired", () => {
    it("validates non-empty strings", () => {
      const result = validateRequired("test value")
      expect(result.isValid).toBe(true)
      expect(result.error).toBeUndefined()
    })

    it("rejects empty or whitespace-only strings", () => {
      const invalidValues = ["", "   ", "\t\n", null, undefined]

      invalidValues.forEach((value) => {
        const result = validateRequired(value as string)
        expect(result.isValid).toBe(false)
        expect(result.error).toBeDefined()
      })
    })
  })

  describe("validateMinLength", () => {
    it("validates strings meeting minimum length", () => {
      const result = validateMinLength("hello world", 5)
      expect(result.isValid).toBe(true)
      expect(result.error).toBeUndefined()
    })

    it("rejects strings below minimum length", () => {
      const result = validateMinLength("hi", 5)
      expect(result.isValid).toBe(false)
      expect(result.error).toContain("mindestens 5 Zeichen")
    })
  })

  describe("validateMaxLength", () => {
    it("validates strings within maximum length", () => {
      const result = validateMaxLength("hello", 10)
      expect(result.isValid).toBe(true)
      expect(result.error).toBeUndefined()
    })

    it("rejects strings exceeding maximum length", () => {
      const result = validateMaxLength("this is a very long string", 10)
      expect(result.isValid).toBe(false)
      expect(result.error).toContain("maximal 10 Zeichen")
    })
  })

  describe("validateUrl", () => {
    it("validates correct URLs", () => {
      const validUrls = [
        "https://example.com",
        "http://test.org",
        "https://subdomain.example.com/path",
        "https://example.com:8080/path?query=value",
      ]

      validUrls.forEach((url) => {
        const result = validateUrl(url)
        expect(result.isValid).toBe(true)
        expect(result.error).toBeUndefined()
      })
    })

    it("rejects invalid URLs", () => {
      const invalidUrls = ["not-a-url", "ftp://example.com", "javascript:alert(1)", "http://", ""]

      invalidUrls.forEach((url) => {
        const result = validateUrl(url)
        expect(result.isValid).toBe(false)
        expect(result.error).toBeDefined()
      })
    })
  })

  describe("sanitizeInput", () => {
    it("removes HTML tags", () => {
      const input = '<script>alert("xss")</script>Hello <b>World</b>'
      const result = sanitizeInput(input)
      expect(result).toBe("Hello World")
    })

    it("trims whitespace", () => {
      const input = "  hello world  "
      const result = sanitizeInput(input)
      expect(result).toBe("hello world")
    })

    it("handles empty input", () => {
      const result = sanitizeInput("")
      expect(result).toBe("")
    })

    it("preserves safe characters", () => {
      const input = "Hello World! 123 äöü ß"
      const result = sanitizeInput(input)
      expect(result).toBe("Hello World! 123 äöü ß")
    })
  })

  describe("Complex validation scenarios", () => {
    it("validates complete form data", () => {
      const formData = {
        email: "test@example.com",
        phone: "+49 30 12345678",
        name: "John Doe",
        message: "This is a test message with sufficient length.",
      }

      const emailResult = validateEmail(formData.email)
      const phoneResult = validatePhone(formData.phone)
      const nameResult = validateRequired(formData.name)
      const messageResult = validateMinLength(formData.message, 10)

      expect(emailResult.isValid).toBe(true)
      expect(phoneResult.isValid).toBe(true)
      expect(nameResult.isValid).toBe(true)
      expect(messageResult.isValid).toBe(true)
    })

    it("handles validation chain", () => {
      const input = "  test@example.com  "
      const sanitized = sanitizeInput(input)
      const emailResult = validateEmail(sanitized)

      expect(sanitized).toBe("test@example.com")
      expect(emailResult.isValid).toBe(true)
    })
  })
})
