import { Inter } from 'next/font/google'
import {useState} from "react";

import {Heading, Text, Tag, Button, Input, TextArea, Rating} from "@/components";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [click, setClick] = useState(false)
  const [rating, setRating] = useState<number>(4)


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

      <Input placeholder={'Write anything here!'} />
      <div>
        <TextArea placeholder={'Write anything to the message'} />
      </div>

      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </main>
  )
}

