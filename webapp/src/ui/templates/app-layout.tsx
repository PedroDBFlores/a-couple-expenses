import { Layout } from "antd"
import React from "react"

const AppLayout = ({ children }: { children: React.ReactNode }) => <Layout>
    {children}
</Layout>

export default AppLayout