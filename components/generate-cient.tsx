"use client"
 
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Input } from "./ui/input"
import { ToastAction } from "./ui/toast"
import { useState } from "react"
import Image from "next/image"
 
const FormSchema = z.object({
  url: z
    .string({
      required_error: "Please add a url.",
    }),
  size: z
    .string({
      required_error: "Please add a size.",
    }),
})
 
export function GenerateClient() {
	const apiUrl = 'https://chart.googleapis.com/chart';
	const [qrCodeUrl, setQRCodeUrl] = useState('');
	
  const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
  })
	
  function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
      const queryString = `?chl=${encodeURIComponent(data.url)}&choe=UTF-8&chs=300x300&cht=qr&chld=${encodeURIComponent(data.size)}`;
			const qrCodeUrl = (apiUrl + queryString);
			setQRCodeUrl(qrCodeUrl);
			toast({
				title: "Yeah! Code generated.",
				description: `url: ${data.url}`,
			})
		} catch (error) {
			toast({
				title: "Oh oh!",
				description: "Something went wrong",
				action: (
					<ToastAction altText="Try again">Try again</ToastAction>
				),
				variant: "destructive",
			})
		}
  }
 
  return (
		<div className="w-full h-full mx-10 md:mx-24 flex items-center justify-center flex-col gap-10 md:gap-5">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
					<FormField
						control={form.control}
						name="url"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Url</FormLabel>
									<FormControl>
										<Input placeholder="www.example.com" {...field} />
									</FormControl>
								<FormDescription>
									Add the url to generate the QR code for.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="size"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Size</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Code size" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="L">L (7%)</SelectItem>
										<SelectItem value="M">M (15%)</SelectItem>
										<SelectItem value="Q">Q (25%)</SelectItem>
										<SelectItem value="H">H (30%)</SelectItem>
									</SelectContent>
								</Select>
								<FormDescription>
									select the desired size
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Generate</Button>
				</form>
			</Form>
			<div id="result" className={`
				${qrCodeUrl ? 'block border rounded-md p-5' : 'hidden' }
			`}>
				<div className="bg-gray-200 rounded-md">
					{qrCodeUrl && <Image src={qrCodeUrl} alt="" width={200} height={200} />}
				</div>
			</div>
		</div>
  )
}