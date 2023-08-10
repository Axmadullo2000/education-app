import { Inter } from 'next/font/google'
import { useState } from "react"
import {GetServerSideProps} from "next";
import axios from "axios";

import { Button, Heading, Input, Rating, Tag, Text, TextArea } from "@/components"
import Card from "@/components/Card"
import {Layout, withLayout} from "@/Layout";


const inter = Inter({ subsets: ['latin'] })

function Home() {
  const [click, setClick] = useState(false)
  const [rating, setRating] = useState<number>(4)


  return (
    <Layout>
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

        <Card color={'yellow'} className={''} >Body 1</Card>
        <Card color={'red'} className={''} >Body 2</Card>
        <Card color={'purple'} className={''} >Body 3</Card>
      </main>
    </Layout>
  )
}

export default withLayout(Home)


export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.post('http://localhost:8100/page-find/', {"firstCategory": 0})

  return {
    props: {
      data
    }
  }
}
