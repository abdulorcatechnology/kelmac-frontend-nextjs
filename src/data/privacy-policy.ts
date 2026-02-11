// data/privacy-policy.ts

export interface PolicySection {
    id: string;
    title: string;
    content: string[];
}

export interface TableOfContentsItem {
    id: string;
    label: string;
}

export const privacyPolicyData = {
    lastUpdated: "May 24, 2025",

    hero: {
        title:
            "Privacy Policy",

        description:
            `Kelmac Group® (hereinafter referred to as "Company", "We", "Us" or "Our") owns, 
        operates and maintains the website https://www.kelmacgroup.com/ ("Website") 
        through which the Company provides services to its clients (hereinafter referred to as 
        "Client", "user", "You" or "Your") and assist in managing intra-city/ country 
        management consulting and training for scheduled and on-demand deliveries 
        ("Services").`,
    },

    introduction: [
        `Kelmac Group® (hereinafter referred to as "Company", "We", "Us" or "Our") owns, 
        operates and maintains the website https://www.kelmacgroup.com/ ("Website") 
        through which the Company provides services to its clients (hereinafter referred to as 
        "Client", "user", "You" or "Your") and assist in managing intra-city/ country 
        management consulting and training for scheduled and on-demand deliveries 
        ("Services").`,
        `In order to provide the Services in an efficient manner, the Company collects certain 
        information regarding the Client and the customers of the Client. We value the trust 
        placed by you and therefore, we follow the highest standards of privacy guidelines to 
        protect the information shared by you with us.`,
        `The statement highlights our privacy practices regarding Personal Information that we 
        collect and store about you through the website and also for those Personal 
        Information that you provide us while participating in our events and campaigns.`,
        `This policy applies where we are acting as a data controller with respect to the 
        personal data of our website visitors, suppliers and clients; in other words, where we 
        determine the purposes and means of the processing of that personal data.`,
    ],

    tableOfContents: [

        {
            id: "providing-data", label: "Providing Personal Data to others"
        },
        {
            id: "international-transfer",
            label: "International transfer of your Personal Data",
        },
        {
            id: "retention", label: "Retention and deleting Personal Data"
        },
        {
            id: "rights", label: "Rights of the Users"
        },
        {
            id: "cookies", label: "Cookies"
        },
        {
            id: "children", label: "Children"
        },
        {
            id: "amendments", label: "Amendments"
        },
        {
            id: "governing-law", label: "Governing law"
        },
        {
            id: "contact", label: "Contact Us"
        },

    ] as TableOfContentsItem[],

    sections: [
        {
            id:
                "providing-data",

            title:
                "Providing Personal Data to others",

            content: [
                `At Kelmac Group, we do not sell, rent, or trade your personal information to third parties. However, we may share your data with trusted partners who assist us in operating our website and providing our services, provided they agree to keep this information confidential.`,
                `We may also disclose your information when required by law or to protect our rights, property, or safety of our employees, customers, or others.`,
            ],
        },

        {
            id:
                "international-transfer",

            title:
                "International transfer of your Personal Data",

            content: [
                `Your personal data may be transferred to and processed in countries outside the European Economic Area. When this occurs, we ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Notice.`,
                `We implement appropriate technical and organizational measures to ensure the security of your data during international transfers, including the use of standard contractual clauses approved by the European Commission.`,
            ],
        },

        {
            id: "retention",
            title: "Retention and deleting Personal Data",
            content: [
                `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required by law.`,
                `When your personal data is no longer needed for the purposes it was collected, we will securely delete or anonymize it in accordance with applicable data protection laws.`,
            ],
        },
        {
            id: "rights",
            title: "Rights of the Users",
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
            id: "cookies",
            title: "Cookies",
            content: [
                `We use cookies and similar tracking technologies to enhance your experience on our website, analyze site traffic, and understand where our visitors are coming from.`,
                `You can control cookie settings through your browser preferences. Disabling cookies may affect functionality. See our Cookie Policy for more details.`,
            ],
        },
        {
            id: "children",
            title: "Children",
            content: [
                `Our services are not directed to individuals under 18. We do not knowingly collect personal data from children. If you believe your child has provided us data, contact us immediately.`,
                `If we discover we have collected data from a child without parental consent, we will delete it promptly.`,
            ],
        },
        {
            id: "governing-law",
            title: "Governing law",
            content: [
                `This Privacy Notice is governed by the laws of Ireland. Any disputes will be subject to the exclusive jurisdiction of the Irish courts.`,
            ],
        },
        {
            id: "amendments",
            title: "Amendments",
            content: [
                `We may update this Privacy Notice from time to time. We will notify you of material changes by posting an updated Notice with a new date.`,
            ],
        },
        {
            id: "contact",
            title: "Contact Us",
            content: [
                `If you have any questions about this Privacy Notice, contact us:`,
                `Kelmac Group Limited
                Old Windmill Office Suites
                Lower Gerald Griffin Street
                Limerick, V94 YRD7
                Ireland

                Email: info@kelmacgroup.com
                Phone: +353 61 491 224`,
            ],
        },
    ] as PolicySection[],

    finalUpdatedDate: "September 26, 2025",
};