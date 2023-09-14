/**
 * v0 by Vercel Labs.
 * @see https://v0.dev/t/ye5y5Oc
 */
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Component() {
    return (
      <Card className="mx-auto max-w-lg p-6 space-y-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg" >
      <div className="flex items-center space-x-4" >
        <Image
          alt="Profile picture"
          className="rounded-full"
          height="100"
          src="/placeholder.jpg?height=100&width=100"
          width="100"
        />
        <div >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100" >
            John Doe
          </h2>
          <h3 className="text-lg text-zinc-600 dark:text-zinc-300" >
            Software Engineer
          </h3>
        </div>
      </div>
      <div className="space-y-2" >
        <p className="text-zinc-800 dark:text-zinc-200" >
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        </p>
        <p className="text-zinc-800 dark:text-zinc-200" >
          Currently, I'm focused on building accessible, human-centered products at Upstatement.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4" >
        <a
          className="block w-full p-3 text-center text-zinc-900 bg-zinc-100 rounded-md dark:bg-zinc-800 dark:text-zinc-200"
          href="#"
        >
          Email
        </a>
        <a
          className="block w-full p-3 text-center text-zinc-900 bg-zinc-100 rounded-md dark:bg-zinc-800 dark:text-zinc-200"
          href="#"
        >
          Call
        </a>
      </div>
    </Card>
  )
}