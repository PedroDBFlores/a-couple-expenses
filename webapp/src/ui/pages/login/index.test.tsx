import { render, screen } from "@testing-library/react"
import LoginPage from "."

describe("Login Page", () => {
    it("renders the login page", () => {
        render(<LoginPage />)

        expect(screen.getByPlaceholderText("Username")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument()
    })
})