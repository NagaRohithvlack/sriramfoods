import { z } from "zod";

export const OrderSchema = z.object({
    img : z.string(),
    itemTitle: z.string(),
    itemOfferAmount: z.number(),
    itemOriginalAmount: z.number(),
    offer: z.string(),
    itemMrpDescription: z.string(),
    starReviews: z.string(),
    size: z.string(),
    grams1: z.string(),
    grams2: z.string(),
    quantityDescription: z.string(),
    quantity: z.number(),
    usageNote: z.string(),
})

export type OrderType = z.infer<typeof OrderSchema>

export const OrderPropSchema = z.object({
    item: OrderSchema,
})

export type OrderPropType = z.infer<typeof OrderPropSchema>

export const SqCardSchema = z.object({
    img: z.string(),
    amount: z.number(),
    btntext: z.string(),
})

export type SqCardType = z.infer<typeof SqCardSchema>

export const SqCardPropSchema = z.object({
    item: SqCardSchema,
})

export type SqCardPropType = z.infer<typeof SqCardPropSchema>