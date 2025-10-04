export const heroslides = [
    {
        heading: "IS ORACLE’S CLOUD STRATEGY ITS “ESCAPE VELOCITY”?",
        paragraph: "How is Oracle changing the market with its cloud strategy?",
        bgImage: "https://images.unsplash.com/photo-1578934191836-ff5f608c2228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
        cta: [
            {
                label: "Read More",
                action: "/",
                type: "link"
            },
        ]
    },
    {
        heading: "CLOUD-CARE SERVICES FOR PUBLIC CLOUD-DEPLOYED ENTERPRISE APPLICATIONS",
        paragraph: "Gain Better Visibility into Your Cloud Spend and Governance",
        bgImage: "https://images.unsplash.com/photo-1579003087287-997fd4d18771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        cta: [
            {
                label: "Watch Now",
                action: "/",
                type: "link"
            }
        ]
    },
    {
        heading: "GO FAST GET RESULTS-DRIVEN SUPPORT SERVICES FOR ORACLE EBS & CLOUD ERP",
        paragraph: "Gain Better Visibility into Your Cloud Spend and Governance",
        bgImage: "https://images.unsplash.com/photo-1578934191836-ff5f608c2228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
        cta: [
            {
                label: "Learn More",
                action: "/",
                type: "link"
            }
        ]
    },
]


export const menuItems = [
    {
        type: "link",
        path: "#",
        label: "Portfolio"
    },
    {
        type: "dropdown",
        label: "Solutions",
        submenu: [
            { path: "../solution/solution", label: "Our Solutions" },
            { path: "../solution/data-and-database-management-solutions", label: "Data & Database Management" },
            { path: "../solution/enterprise-applications-management-solutions-functional-support", label: "Enterprise Applications Management" },
            { path: "../solution/solutioncloud-sprawl-management-solutions", label: "Cloud Sprawl Management Solutions" },
            { path: "../solution/oracle-license-solutions", label: "Oracle License Solutions" },
            { path: "../solution/engineered-ststem", label: "Engineered Systems" },
            { path: "../solution/functional-support", label: "Functional Support" },
            { path: "../solution/safe-switch-solution", label: "Safe Switch Migration Methodology" },
        ]
    },
    {
        type: "dropdown",
        label: "Services",
        submenu: [
            { path: "#", label: "Our Services" },
            { path: "#", label: "Professional Services" },
            { path: "#", label: "Managed Services" },
            { path: "/developer/saurabh-portfolio", label: "Developer Portfolio" },
        ]
    },
    {
        type: "dropdown",
        label: "Technologies",
        submenu: [
            { path: "/technology", label: "Our Technologies" },
            { path: "/technology/applications", label: "Applications", children: [
                { path: "/technology/applications/fusion-cloud-erp", label: "Oracle Fusion Cloud ERP" },
                { path: "/technology/applications/netsuite", label: "Oracle NetSuite ERP" },
                { path: "/technology/applications/ebs", label: "Oracle E-Business Suite", children: [
                    { path: "/technology/applications/ebs/financials", label: "Financials" },
                    { path: "/technology/applications/ebs/supply-chain", label: "Supply Chain" },
                    { path: "/technology/applications/ebs/manufacturing", label: "Manufacturing" },
                    { path: "/technology/applications/ebs/hcm", label: "HCM" },
                    { path: "/technology/applications/ebs/crm", label: "CRM" },
                    { path: "/technology/applications/ebs/procurement", label: "Procurement" },
                    { path: "/technology/applications/ebs/projects", label: "Projects" },
                ] },
                { path: "/technology/applications/peoplesoft", label: "PeopleSoft" },
                { path: "/technology/applications/jde-enterpriseone", label: "JD Edwards EnterpriseOne" },
            ] },
            { path: "/technology/databases", label: "Databases", children: [
                { path: "/technology/databases/oracle", label: "Oracle Database" },
                { path: "/technology/databases/sql-server", label: "Microsoft SQL Server", children: [
                    { path: "/technology/databases/sql-server/azure-sql-database", label: "Azure SQL Database" },
                ] },
                { path: "/technology/databases/mysql", label: "MySQL" },
                { path: "/technology/databases/postgresql", label: "PostgreSQL" },
                { path: "/technology/databases/db2", label: "IBM Db2" },
                { path: "/technology/databases/sap-hana", label: "SAP HANA" },
                { path: "/technology/databases/mongodb", label: "MongoDB" },
                { path: "/technology/databases/cassandra", label: "Cassandra (Apache)" },
                { path: "/technology/databases/redis", label: "Redis" },
                { path: "/technology/databases/amazon-dynamodb", label: "Amazon DynamoDB" },
                { path: "/technology/databases/couchbase", label: "Couchbase" },
                { path: "/technology/databases/amazon-rds-aurora", label: "Amazon RDS / Aurora" },
                { path: "/technology/databases/google-cloud-spanner", label: "Google Cloud Spanner" },
                { path: "/technology/databases/firestore-firebase", label: "Firestore / Firebase" },
            ] },
            { path: "/technology/bi-analytics", label: "BI/Analytics" },
            { path: "/technology/integration-platforms", label: "Integration Platforms" },
            { path: "/technology/cloud-platforms", label: "Cloud Platforms" },
            { path: "/technology/middleware", label: "Middleware" },
            { path: "/technology/infrastructure", label: "Infrastructure" },
            { path: "/technology/service-management", label: "Service Management" },
        ]
    },
    {
        type: "dropdown",
        label: "Partners",
        submenu: [
            { path: "/partner", label: "Our Partners" },
            { path: "/partner/oracle", label: "Oracle" },
            { path: "/partner/microsoft", label: "Microsoft" },
            { path: "/partner/aws", label: "AWS" },
            { path: "/partner/alliance", label: "Alliance Partners" },
            { path: "/partner/referel", label: "Referral Partners" }
        ]
    },
    {
        type: "link",
        label: "About Us",
        path: "/about",
    },
    {
        type: "link",
        label: "Contact Us",
        path: "/contact"
    },
]