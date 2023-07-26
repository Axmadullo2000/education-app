import { Inter } from 'next/font/google'
import {Heading, Text, Tag, Button} from "@/components";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [click, setClick] = useState(false)


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Heading tag={'h3'}>
        ABC
      </Heading>

      <Text size={'m'}>f</Text>

      <Tag size={'m'} color={'white'}>White</Tag>

      <div className={'flex'} style={{display: "flex"}}>
        <Button appearance={'white'} >
          Right
        </Button>

        <Button appearance={'red'} >
          Red
        </Button>

        <Button appearance={'blue'} >
          Blue
        </Button>

        <Button appearance={'white'} arrow={click ? 'right' : 'down'} onClick={() => setClick(prev => !prev)}>
          A (white)
        </Button>

        <Button appearance={'red'} arrow='right'>
          A (red)
        </Button>

      </div>
    </main>
  )
}

