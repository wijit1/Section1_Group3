

import { SearchBar } from "@/components/SearchBar"
import { Category } from "@/components/Category"
import { Collection } from "@/components/Collection"


export default function search() {
  return (
    <div className="flex flex-col mt-5 gap-10">
      <SearchBar/>
      <div className="flex gap-4 pt-10 px-16">
        <Category/>
        <Collection/>
        <div className="absolute bottom-2 left-1 text-gray-500 border-gray-300 p-3 mt-6">
        </div>
      </div>
    </div>
  )
}
