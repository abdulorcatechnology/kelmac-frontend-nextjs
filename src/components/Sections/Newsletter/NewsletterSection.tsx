import Button from "@/components/ui/button/Button";

export default function NewsletterSection() {
	return (
		<section className="bg-secondary rounded-2xl overflow-hidden bg-[url('/images/bg/newsletter.png')]">
			<div className="main-container primary-py grid grid-cols-1 md:grid-cols-3 items-center md:gap-0">
				<div className="col-span-2 text-white md:pr-32">
					<h2 className="main-heading">Join our newsletter</h2>
					<p className="text-lg mt-8">
						Sign up for COMPLIANCE OUTLOOK, the Kelmac Group® newsletter, for
						the latest news and updates in the world of Compliance and
						Conformity.
					</p>
				</div>
				<div className="col-span-1 mt-5 md:mt-0">
					<form
						action="#"
						className="bg-white p-2 rounded-full flex justify-between"
					>
						<input
							className="focus:outline-0 flex-1 font-inter pl-4"
							type="text"
							placeholder="Enter your email"
						/>
						<Button spanclassName="px-3" text="Subscribe" color="primary" />
					</form>
				</div>
			</div>
		</section>
	);
}
