export type TermSection = {
	id: string;
	title: string;
	content: string | string[];
	subsections?: {
		title: string;
		content: string | string[];
	}[];
};

export const termsHeroData = {
	title: "Terms & Conditions",
	description: "Last Updated May 24, 2025",
	backgroundImage: "/images/bg/privacy.png",
};

export const termsNavItems = [
	{ id: "bookings", label: "Bookings - Public/Open Training" },
	{ id: "fees", label: "Public Training Fees & Online Discounts" },
	{
		id: "in-house",
		label: "In-House / Tailored Training — Fees, Payment & Scheduling Terms",
	},
	{ id: "late-payment", label: "Late Payment" },
	{ id: "payment-method", label: "Method of Payment" },
	{ id: "discount", label: "Discount Policies" },
	{
		id: "learning-requirements",
		label: "Prior Learning Requirements (CQI and IRCA)",
	},
	{ id: "substitutions", label: "Learner Substitutions" },
	{ id: "transfers", label: "Learner Transfers" },
	{ id: "course-status", label: "Course Status — Confirmation Period" },
	{ id: "cancellation", label: "Cancellation Policy" },
	{ id: "venue", label: "Location / Training Venue" },
	{ id: "accommodation", label: "Accommodation & Travel" },
	{ id: "examination", label: "Examination Results" },
];

export const termsSections: TermSection[] = [
	{
		id: "bookings",
		title: "Bookings - Public/Open Training",
		content: [
			"1. Booking & Acceptance: Upon Kelmac Group®'s receipt of your registration by email or telephone (a \"Booking\"), you acknowledge and agree that you fully and unconditionally accept Kelmac Group®'s Terms and Conditions in their entirety. Upon such acceptance, your place on the relevant training event (the \"Event\") is deemed confirmed.",
			"2. Welcome Communication: Following confirmation, Kelmac Group® will issue a welcome email setting out essential Event details, including the venue and other pertinent information.",
			"3. Cancellation/Postponement Notice: Kelmac Group® will provide no less than ten (10) Business Days' notice if an Event will not proceed. While every effort is made to ensure all Events proceed as scheduled, Kelmac Group® will provide as much advance notice as practicable where postponement or cancellation is required. See \"Cancellation/Postponement\" below for further information.",
		],
	},
		{
		id: "fees",
		title: "Public Training Fees & Online Discounts",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
			"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		],
	},
	{
		id: "in-house",
		title: "In-House / Tailored Training — Fees, Payment & Scheduling Terms",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
			"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.",
			"Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.",
		],
	},
	{
		id: "late-payment",
		title: "Late Payment",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	},
	{
		id: "payment-method",
		title: "Method of Payment",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
			"• Nullam euismod, nisl eget ultricies aliquam",
			"• Nunc nisl aliquet nunc, vitae aliquam nisl",
			"• Sed do eiusmod tempor incididunt",
			"• Ut labore et dolore magna aliqua",
			"• Ut enim ad minim veniam",
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		],
	},
	{
		id: "discount",
		title: "Discount Policies",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
			"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.",
			"Nullam quis risus eget urna mollis ornare vel eu leo.",
			"Cum sociis natoque penatibus et magnis dis parturient montes.",
			"Etiam porta sem malesuada magna mollis euismod.",
		],
	},
	{
		id: "learning-requirements",
		title: "Prior Learning Requirements (CQI and IRCA)",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Duis aute irure dolor in reprehenderit:",
			"• Nullam euismod nisl eget ultricies",
			"• Vivamus lacinia odio vitae vestibulum",
			"• Cras mattis consectetur purus",
			"• Donec sed odio dui etiam porta",
			"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		],
	},
	{
		id: "substitutions",
		title: "Learner Substitutions",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"Ut enim ad minim veniam, quis nostrud exercitation:",
			"• Nullam euismod nisl eget ultricies aliquam",
			"• Nunc nisl aliquet nunc vitae aliquam",
			"• Sed do eiusmod tempor incididunt",
			"• Duis aute irure dolor in reprehenderit",
			"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
		],
	},
	{
		id: "transfers",
		title: "Learner Transfers",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
			"Cras mattis consectetur purus:",
			"• Nullam quis risus eget urna mollis",
			"• Cum sociis natoque penatibus",
			"• Etiam porta sem malesuada magna",
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		],
	},
	{
		id: "course-status",
		title: "Course Status — Confirmation Period",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"Ut enim ad minim veniam, quis nostrud:",
			"• Nullam euismod nisl eget ultricies",
			"• Vivamus lacinia odio vitae vestibulum",
			"• Cras mattis consectetur purus sit amet",
			"• Donec sed odio dui etiam porta sem",
			"• Nullam quis risus eget urna mollis",
			"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
		],
	},
	{
		id: "cancellation",
		title: "Cancellation Policy",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
			"• Nullam euismod nisl eget ultricies aliquam nunc",
			"• Vivamus lacinia odio vitae vestibulum vestibulum",
			"• Cras mattis consectetur purus sit amet fermentum",
			"• Donec sed odio dui etiam porta sem malesuada",
			"",
			"Sed do eiusmod tempor incididunt ut labore:",
			"• Ut enim ad minim veniam quis nostrud",
			"• Duis aute irure dolor in reprehenderit",
			"• Excepteur sint occaecat cupidatat non proident",
			"",
			"Nullam quis risus eget urna mollis ornare vel eu leo.",
			"",
			"Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.",
		],
	},
	{
		id: "venue",
		title: "Location / Training Venue",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			"Duis aute irure dolor in reprehenderit:",
			"• Nullam euismod nisl eget ultricies",
			"• Vivamus lacinia odio vitae vestibulum",
			"• Cras mattis consectetur purus sit amet",
			"",
			"Sed ut perspiciatis unde omnis iste:",
			"• Donec sed odio dui etiam porta",
			"• Nullam quis risus eget urna mollis",
			"• Cum sociis natoque penatibus",
			"",
			"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
		],
	},
	{
		id: "accommodation",
		title: "Accommodation & Travel",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor:",
			"• Nullam euismod nisl eget ultricies",
			"• Vivamus lacinia odio vitae vestibulum",
			"• Cras mattis consectetur purus sit amet",
			"• Donec sed odio dui etiam porta",
			"• Nullam quis risus eget urna mollis",
			"",
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
			"",
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
			"",
			"Excepteur sint occaecat cupidatat:",
			"• Cum sociis natoque penatibus et magnis",
			"• Etiam porta sem malesuada magna",
			"• Nullam id dolor id nibh ultricies",
			"• Vestibulum id ligula porta felis",
		],
	},
	{
		id: "examination",
		title: "Examination Results",
		content: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"Ut enim ad minim veniam:",
			"• Nullam euismod nisl eget ultricies",
			"• Vivamus lacinia odio vitae vestibulum",
			"• Cras mattis consectetur purus sit amet",
			"",
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			"",
			"Excepteur sint occaecat cupidatat:",
			"• Cum sociis natoque penatibus",
			"• Etiam porta sem malesuada magna",
			"• Nullam quis risus eget urna mollis",
			"• Donec sed odio dui etiam porta",
			"",
			"Sed ut perspiciatis unde omnis:",
			"Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.",
		],
	},
];