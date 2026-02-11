// data/privacy-policy.ts

export interface CookieSection {
    id: string;
    title: string;
    content: string[];
}

export interface TableOfContentsItem {
    id: string;
    label: string;
}

export const cookieData = {
    lastUpdated: "May 24, 2025",

    hero: {
        title:
            "Cookie Policy",

        description:
            `Kelmac Group® website uses technology to collect information about its use, to distinguish between users, to help us provide you with a good experience and to allow us to improve the site and the service we offer. This means that when you visit our website, cookies or similar technologies will be placed on your computer or other device. In the tables below you'll see a description of each cookie that we use, what it does and whether or not it collects personal data about you. Personal data means data which identifies or can be used to identify you as an individual, including online identifiers such as your IP address. Please make sure you read our Privacy Policy as well as this. Cookie Policy`,
    },

    introduction: [
        `Cookies are small text files that are placed on your computer, smartphone or other device when you visit our website. A cookie file is stored on your device and allows us to recognise you and make your visit easier and more useful to you when you revisit our website.`,
    ],

    tableOfContents: [

        {
            id: "collecting-data", label: "Who is collecting it?"
        },
        {
            id: "why-use-cookies",
            label: "What purpose does Kelmac Group® use cookies for?",
        },
        {
            id: "cookies", label: "What are types of Cookies Kelmac Group® Use?"
        },
        {
            id: "delete-cookies", label: "How you can control and delete cookies?"
        },
        {
            id: "disclaimer", label: "Disclaimer"
        },

    ] as TableOfContentsItem[],

    sections: [
        {
            id:
                "collecting-data",

            title:
                "Who is collecting it?",

            content: [
                `Kelmac Group® use cookies to make our websites easier to use, to deliver a personalised experience on our websites, and to better tailor our products, services and websites to your interests and needs. Cookies are used to help speed up your future activities and your experience on Kelmac Group® websites.`,

                `We use cookies to obtain information about your visits and about the device you use to access our website. This includes where available, your IP address, operating system and browser type and, depending on the cookie, also includes the reporting of statistical data about our users' browsing actions and patterns.`,
            ],
        },

        {
            id:
                "why-use-cookies",

            title:
                "What purpose does Kelmac Group® use cookies for?",

            content: [
                `Your personal data may be transferred to and processed in countries outside the European Economic Area. When this occurs, we ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Notice.`,
                `We implement appropriate technical and organizational measures to ensure the security of your data during international transfers, including the use of standard contractual clauses approved by the European Commission.`,
            ],
        },

        {
            id: "cookies",
            title: "What are types of Cookies Kelmac Group® Use?",
            content: [
                `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required by law.`,
                `When your personal data is no longer needed for the purposes it was collected, we will securely delete or anonymize it in accordance with applicable data protection laws.`,
            ],
        },
        {
            id: "delete-cookies",
            title: "How you can control and delete cookies?",
            content: [
                `You have significant rights under data protection law. These rights include:`,
                `Right to Access: You can request access to your data.
                Right to Rectification: You can request corrections.
                Right to Erasure: You can request deletion.
                Right to Restriction: You can request limited processing.
                Right to Restriction: You can request limited processing.
                Right to Data Portability: You can request export of your data.
                Right to Object: You can object to processing for marketing.
                Right to Withdraw Consent: You may withdraw consent anytime.`,
                `To exercise any of these rights, please contact us at info@kelmacgroup.com`,
            ],
        },
        {
            id: "disclaimer",
            title: "Disclaimer",
            content: [
                `We use cookies and similar tracking technologies to enhance your experience on our website, analyze site traffic, and understand where our visitors are coming from.`,
                `You can control cookie settings through your browser preferences. Disabling cookies may affect functionality. See our Cookie Policy for more details.`,
            ],
        },

    ] as CookieSection[],

    finalUpdatedDate: "September 26, 2025",
};