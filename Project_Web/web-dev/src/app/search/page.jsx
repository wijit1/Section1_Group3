

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
      </div>
    </div>
  )
}