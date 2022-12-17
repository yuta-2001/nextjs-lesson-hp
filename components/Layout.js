import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout ({ children, title = 'HP by Next.js' }) {
	return (
		<div className='flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono'>
			<Head>
				<title>{ title }</title>
			</Head>
			<header>
				<nav className="bg-gray-800 w-screen">
					<div className="flex items-center pl-8 h-14">
						<div className="flex space-x-4">
							<Link href='/' className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
								Home
							</Link>
							<Link href='/blog-page' className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
								blog
							</Link>
							<Link href='/contact-page' className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
								contact
							</Link>
						</div>
					</div>
				</nav>
			</header>
			<main className="flex flex-1 justify-center items-center flex-col w-screen">
				{ children }
			</main>
			<footer className='w-full h-12 flex justify-center items-center flex-col'>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
					className="flex items-center"
        >
          Powered by{' '}
          <span className=''>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </footer>
		</div>
	);
}