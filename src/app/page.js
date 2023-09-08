import Header from "@/components/Header";
import Image from "next/image";
import SearchInput from '@/components/SearchInput'

export default function Home() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center mt-12">
				<Image
					src="https://pngimg.com/uploads/google/small/google_PNG19642.png"
					width={300}
					height={100}
					alt="Picture of the author"
				/>
				<SearchInput/>
			</div>
		</>
	);
}
