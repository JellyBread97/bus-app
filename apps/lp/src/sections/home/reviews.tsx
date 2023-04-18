import { Card, CardContent, SectionAndOffset, Text } from "components"
import React from "react"
import tw from "tailwind-styled-components"
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill"
import { IoMdQuote } from "@react-icons/all-files/io/IoMdQuote"

const CardContainer = tw.div`flex justify-center gap-4 mt-14`
const ImageContainer = tw.div`rounded-full overflow-hidden w-14 h-14`
const Star = tw(BsStarFill)`w-4 h-4 text-yellow-500`

type ReviewType = {
  name: string
  timeAgo: string
  content: string
  imageUrl: string
  starsCount: number
}

const reviews: ReviewType[] = [
  {
    name: "Julie M.",
    timeAgo: "2 days ago",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus a nobis accusamus nihil soluta placeat corrupti quos reprehenderit dolorum, reiciendis veritatis ex magni neque alias deleniti expedita ipsum explicabo",
    imageUrl: "https://randomuser.me/api/portraits/women/76.jpg",
    starsCount: 5,
  },
  {
    name: "Joe D.",
    timeAgo: "5 days ago",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus a nobis accusamus nihil soluta placeat corrupti quos reprehenderit dolorum, reiciendis veritatis ex magni neque alias deleniti expedita ipsum explicabo",
    imageUrl: "https://randomuser.me/api/portraits/men/76.jpg",
    starsCount: 5,
  },
  {
    name: "Mark C.",
    timeAgo: "7 days ago",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus a nobis accusamus nihil soluta placeat corrupti quos reprehenderit dolorum, reiciendis veritatis ex magni neque alias deleniti expedita ipsum explicabo",
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    starsCount: 5,
  },
]

const Stars = ({ item }: { item: ReviewType }) => {
  const starsArray = new Array(item.starsCount).fill(0).map((_starItem, i) => i)

  return (
    <div className="flex items-center gap-x-1">
      {starsArray.map(i => (
        <Star key={i} />
      ))}
    </div>
  )
}

const ReviewItem = ({ item }: { item: ReviewType }) => {
  const quotedContent = `"${item.content}"`

  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-x-4">
          <ImageContainer>
            <img src={item.imageUrl} alt={item.name} />
          </ImageContainer>
          <div>
            <div className="flex gap-x-3">
              <Text variant={"bodyBig"}>{item.name}</Text>
              <Stars item={item} />
            </div>
            <Text variant={"subtitle"}>{item.timeAgo}</Text>
          </div>
        </div>
        <Text className="mt-4 italic">{quotedContent}</Text>
        <div className="absolute top-4 right-4">
          <IoMdQuote className="fill-green-500" />
        </div>
      </CardContent>
    </Card>
  )
}

export const ReviewsSection = () => {
  return (
    <SectionAndOffset>
      <Text variant={"h4"} className="text-center uppercase">
        {"What Our Clients Say"}
      </Text>
      <CardContainer>
        {reviews.map(item => (
          <ReviewItem key={item.name} item={item} />
        ))}
      </CardContainer>
    </SectionAndOffset>
  )
}