import { CategoryName, Footer, Header, ProductAdd, ProductListing } from '../componets'
import { useEffect, useState } from 'react'
import Loader from '../componets/Loader'


function Home() {
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    const timeOut= setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timeOut);
  },[])
  const data=[ {
    "product_photos": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRui25CqmpJCp_4h-DdtuY6GeiMUNoVLtxY9cxS1oTg2xoL9KKoUbniUWUrC4HzffjwQY9vMDg_5N9jP5kk8GmBABsYqQZ5LQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ2_WpFJplGOKxZYkftyu-WWdtPl3KBVgq4DUU1TgQUhg1Ap2pXUBMFOA1S50rQS7Byrl_UpEEyMh-sYp8wpDSyI0VYlFXY4Q&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxe65Y9umJyJLrcEciGBCICpgL_ZxmuPkCMf1lM9nSdZi9NxrRsnU-SJGSb82TUrexJsB-c9ucxslRPiYDT68gSRDMzHlC&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnBlKuYd0U3jQShok4JeCT6xUVJRqyBAmb0P2eFnyd0lW-RknQnVNLv0S3n3aDqpzzfQ7LDEr0xEkE2yUS1lTP6lu5Vr12NQ&usqp=CAE"
    ],
    "product_id": "7835490386443943688",
    "product_category":"womanscloth",
    "product_rating": null,
    "product_title": "Bsubseach Women Long Swimsuit Cover Up Button Down Shirt Dress Beach Cover Up with Drawstring",
    "original_price": null,
    "Color": "A-pink",
    "product_description": "The cover up shirt one size(inch): Bust:49.6\" Sleeve Length:22.4\" Length:51.2\" Turn down collar swimsuit coverup shirt dress for women, featuring drawstring and pockets. Leisure comfortable loose fit and cool tunic style Made of soft lightweight and breathable fabric, comfortable to wear in hot days Perfect cover up dress for beach, resort, swimming pool, vacation, travel, daily leisure, and so on. Feature: /b br Material: 40% Polyester+60% Rayon br Sleeve: Long Sleeve br Occasion: Beach, Vacation, Daily Leisure br Season: Spring/Summer/Autumn br br Specifications: /b br You can wear it as a beach coverup with a bikini or swimsuit, or as a tunic shirt dress to create a stylish and casual style. br The swim coverup is a flowy boho tunic dress featuring a turn-down collar and button-down. br",
    "typical_price_range": [
      "$29.99",
      "$29.99"
    ]
  },
  {
    "product_photos": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTz4JBBB12-gVLTntb5aLSKwy9hI4bv1UE4Arm2OJ0Q7NhTtVyID3P7gP6qBHQhr5l07nPy0s1fXzx06Tq2_zPOymbWYAZl&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_gHvmmVd6FTMie8QsbgfKJRnFQdeoA_pS20-2CLmt97ojs8k73ej7ftIwlj8MDZ4JZj3AwdkO9-CkHwct8ByTNd3DAGJD&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRoqr1JgTXTNaMpsb_wasZ7sMM9ZdiJGydQF3YixsoSIivRj0v1k4uMaSEJ0IXWG36UNU9bWTXth5epP-1gAi5ebLGg9wb4_Q&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSknWUu8a5RLtSy5nNF-U4ZS0EMa-FTa5Tfbn04I-9we5WWgC4e5cZtQI5jpvOH9xSkYDPOgiS1I6cJ1f1xG6FsEaxs6g8M&usqp=CAE"
    ],
    "product_id": "2967560084352435397",
    "product_category":"womanscloth",
    "product_rating": null,
    "product_title": "Bsubseach Women Loose Long Sleeve Swimsuit Cover Ups Button Down Beach Shirt",
    "original_price": null,
    "Color": "Purple",
    "product_description": "It maybe wrinkle and shrank in the first wash, hung it dry, ironing it will be flat and return to its original shape Size(inch): Bust:47.24\" Waist:47.24\" Length:39.37\" Stylish design with button Fashion turn down collar beach cover up Suitable for: Party, Daily Wear, Swimming pool, Beach,streetwear Feature: /b br Material: Rayon br Sleeve: Long Sleeve br Washing: Hand Wash. Hang to dry br Package Include: 1 x Women Bathing Suit Cover up br Color may be lighter or darker due to the different PC display br",
    "typical_price_range": [
      "$28.99",
      "$28.99"
    ]
  },
  {
    "product_photos": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0W-0aUeuzR2w53jqVU6yURJ5r9XhZLvhH6Cw6GghF74qvPhsYV2C3U-iECns-iwQqiYN50sABxsM7tDBGu242G97puttn&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjKEaUdgdQafmQxkGRGfsKO11VISho2iTQmcX3mHs2sgSTmTSVvcS_i_ZmRBYbPyG4yUmI4aC1Tz7wqXP6ifSyINPjOZdfQA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSt8cduPuETrudrzvkzbILo5ziepmAHehVE03fqSBDU0h_CD_jtOC5c2z2wDCc1M38Om6mOeXEscMSBz-3X9iULLzEfVt1N&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJjvP1GkriWopRd1Zn_4wWOPMMy0QDkAb8vi5D-_TOce3sEbcTVqc-4GVroSfIE81M0vyTIAl5MDYncG_bGlXfLc1SsItP&usqp=CAE",
      
    ],
    "product_id": "12900811478224728209",
    "product_category":"womanscloth",
    "product_rating": 4.3,
    "product_title": "Eddie Bauer Ladies' Sleeve Cross-Front Tunic - Sea Blue - L",
    "original_price": null,
    "Color": "Sea Blue",
    "product_description": "Natural cotton is blended with modal to create the extraordinary comfort of this 3/4-sleeve tunic. Its exceptional comfort and easy-care convenience combine beautifully with the cotton in this tunic to make it a superior choice for travel.",
    "typical_price_range": [
      "$16.12",
      "$30.00"
    ]
  },
  {
    "product_photos": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxcCT8Lq5U3paFsH4Km8dCu0oJP2kSkxmXOwH5XeyTpn0EpeX0no_tzWggtGuBljbGmy1eVw803HCNdt15ntMCTUbBMJ9xLw&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvB-haiD8Riyrz_Q43cBGYQ20UHcOjHTF9cFLh1uAfeBR_pq2CrYaGlN4y7JCelr4mBYfASMBdUnEqI5-iDMHpVyzIULXw&usqp=CAE"
    ],
    "product_id": "1130540883927868052",
    "product_category":"womanscloth",
    "product_rating": null,
    "product_title": "Aherbiu Womens Long Sleeve Shirts Button Cotton Linen Casual Loose Fit Hide Belly Blouse Shirt Spring Casual Tops for Women, Women's, Size: Large,",
    "original_price": null,
    "product_description": "***** New Size Chart ***** Size.: Large US: 8 UK: 12 EU: 38 Bust: 116cm/45.67'' Length: 57-63cm/22.44-24.80''",
    "typical_price_range": [
      "$17.77",
      "$17.77"
    ]
  },
  {
    "product_photos": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6wmd8_oQzvn9QPKZodxDpUT53tdCzyJvkbxOGBrLdFcVEa7U9K0tv69FZ7G-ecevGytwEOJKutDVZaZyqwiLp7SA5syxaxg&usqp=CAE"
    ],
    "product_id": "8075476772936531965",
    "product_category":"womanscloth",
    "product_rating": null,
    "product_title": "Defal Women's Long Sleeve Lace Tunic Top Blouse Casual Swing Tunic Shirt Dress",
    "original_price": null,
    "Color": "Green",
    "product_description": "Material: 95% Cotton + 5% Polyester,soft and breathable,comfy to wear. Features:roud neck,loose style,lace splicing hem,plus size top,swing tunic dress,good with pants,leggins,boots. Casual long sleeve scoop neck lace shirts blouse tops great for ladies,juniors and teens,winter or fall wear. Lovely long flowy tunic shirt dress is great for home,date,going out,party,work,casual wear,winter,fall,spring,swing casual dress is great match with skinny jeans and boots. Size Suggested: Small=US 4-6,Medium=US 8-10,Large=US 12-14,X-Large=US 16-18,XX-Large=US 20-22. Women's Long Sleeve Lace Tunic Top Blouse Casual Swing Shirt Dress br SIZE CHART inches br S---Bust:35.8---Shoulder:14.96---Back Length:30.7---Sleeve:22.8 br M---Bust:37.79---Shoulder:15.35---Back Length:31.49---Sleeve:23.19 br L---Bust:40.15---Shoulder:15.74---Back Length:32.28---Sleeve:23.59 br XL---Bust:42.51---Shoulder:16.14---Back Length:33.07---Sleeve:24.01 br XXL---Bust:45.66---Shoulder:16.92---Back Length:33.1---Sleeve:24.0",
    "typical_price_range": [
      "$20.99",
      "$20.99"
    ]
  },{
    "product_photos": [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTntXyXPGKNpOgW9Mk-20NjvK7TwPxgGCg7_IYwE-YANM8bic3NfQV1FDC0SGJRTy_HkfbrpTze_6M0WiqpvZ_EF9X-4ocR5A&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRpXPNR4zDdSzX6Hn2L7QBYpzVw3r3J2_fHtFN6AsJPU_3Bs_Qht1oGk27qkBOkZQaVQ6lSAhPM9tTI3rRwbg-rZRGZtR28&usqp=CAE"
    ],
    "product_id": "12936627589634088314",
    "product_category":"womanscloth",
    "product_rating": null,
    "product_title": "Aherbiu Womens Long Sleeve Shirts Button Cotton Linen Casual Loose Fitting Hide Belly Blouse Shirt Spring Casual Tops for Women, Women's, Size: Large,",
    "original_price": null,
    "product_description": "***** New Size Chart ***** Size.: Large US: 8 UK: 12 EU: 38 Bust: 116cm/45.67'' Length: 57-63cm/22.44-24.80''",
    "typical_price_range": [
      "$17.77",
      "$17.77"
    ]
  },{
    "product_title": "Mens Button Up Shirts Long Sleeve Linen Beach Casual Cotton Summer Lightweight Tops",
    "product_category":"menscloth",
    "product_description": "Features: casual work shirt, regular slim fit, spread/ standard collar, long sleeve, solid color, button up. Classic Vintage Casual Shirt for Men / Boys / High School or College Students / All the Youth or Adults. Material: A fine linen and cotton blend, soft and breathable, lightweight and comfort. Made of ultra soft and breathable linen fabric. Material Composition: A fine linen and cotton blend, soft and breathable, lightweight and comfort. Made of ultra soft and breathable linen fabric. Collar Type: Spread Collar Sleeve Type: Long Sleeve Closure: Button Style: Classic Fit Type: Slim,Classic,Standard,Regular,Loose Stylish and Modern Design is perfect all occasions especially casual outings, yoga, beach, workout, school, work, business, vacation, etc. Size & Color: S/ M/ L/ 1L/ 2L, White/ Grey/ Army Greem/ Pink/ Sky Blue/ Black, choose you like. You can always find the most suitable one in Runcati. Size: Small, Medium, Large, X-large, XX-Large, XXX-Large, you can order the size fit you .",
    "product_photos": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkTCLJ0nsdFtHPOgayc0fETtwCd3U17l320RgBkM-XlY0KK5OFlC_v9VXMd3YdrmI6tkex943__iRZW_31p3IJg1pMuFs-&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQPfWnsb5E9A7nETD1FGoCgAtJd77mzsLdyWCczo66M17LgaLIpKMN9SGDUZmgcO3JhUdyktbkUO7VUJCHMc0DRjUmk__dSsA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYHRTRsq8MDpEYsPvGe4KtoA-WTUGqVQsvHsra9yXGHnKLNxElImfarTo8sv6Ee6ZViL4ytT2PzLyiGtd-Eht2JmnTO_3OQg&usqp=CAE"
    ],
    "product_rating": 4,
    "typical_price_range": [
      "$23",
      "$50"
    ],
    "product_id": "9219538014421854670"
  },
  {
    "product_title": "Men's Cotton Linen Stand Collar Shirt Summer Mandarin Collar Shirt Casual Button Blouse Big Tall Brown/XL",
    "product_description": "Men's Casual Stand Collar Natural Fiber Short Sleeve Shirt is natural and soft, come to Royaura to find out about the Comfortable Nature Fiber shrits",
    "product_category":"menscloth",
    "product_photos": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZsEvjvBdIGFpOG4PcHfzqm_zT3ON8zX0HWjawfmhKVjzYoiw0twuDKBANBytmmZm4vTvpjNIkkdx5Jk61csQdlgWBYLbAkQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRp3L6Hl2tqRuaIhohxLsN4QQvizT93-u9Z3z05EwaQblEpTrEF5Z1COQm_XRkhU9njgV4ShxhbNqT2sXoDkd_uB9nGwldU2Q&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxRrE3F2J-n7XqgB-Q63Wd7ReXMxJwE_jyXnwhyCXRaL1Ve7NQuBIZAR6cua05QBZIYlwq82Tfw5_RhoHk418ikO2RH9H8&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHHo7KmhW-qXr_bahCtZ6hVjoMIWQjTlJ0FG5ZZ0ii0o7L81FwuqIQWMTBplVJEUzT3Ook-FPWPSsfQczM5LdBtbFNvyHx&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSr-n2mvTu9cJF-rgsTv2hQY6__T1eib24OUvtbXB2GMkNn3ueHl5lqJj6GILwpPTjfVGfLvT3VUita5_hGwnnyD73opHGyCg&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQN_ZUKGnsj8tFehE1e5KCKsWNuLnBCBu-c5wmG_csSFhMAy88znYJApqEPNXHllSScJwMq5nOTYYwJkqQlXqWmw0eIOAd_5Q&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBLC081omreohg3oTRIPH_lbAr0cKVrHV5u1vy5QmLTgV7S5lSYuyimltOdtqLIsXs85ajgWTIk1fjyBNkuZcyNnwppBmxow&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcReaxr48ITF56HMM_TU3yOdwz-HTVUUi0fsMGuFFMGUfOfMkW8AURKMiVIu6Wy5Os2gcJry7fFXpBHr4Yabd_-Nxq0Ff0KMsg&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZvVqdjqfSKHuzQdDRwixuVVyAbHquFx6ySUx19p5t2qQtK44Tr3KXqWKU6ZMMCFWQLD-BjyqDaonWJJx03egMILBxFiDwUg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOuDppS7vm0SIMqN9zYIlpsoogNQyOWOptqqFc1MERhg5uS7Rn_nbwZLvz6aWDWHEcY1ByKez8gjqJK_N7FUM6dVZKefM8&usqp=CAE"
    ],
    "product_rating": null,
    "typical_price_range": [
      "$21.59",
      "$26.99"
    ],
    "product_id": "7403509659905989864"
  },
  {
    "product_title": "Men's Long Sleeve Solid Color Tops New Streetwear Casual Fashion Green / XL / United States",
    "product_description": "SPECIFICATIONStshirt for mens luxury: tshirt for mens y2ktops for men oversize: top for mens summertee shirt men: Mens social shirtt shirt homme: mens clothes luxury stylesummer shirts for men: men fashion casual shirtshirts for men zevity: ropa hombreshirts for men: shirts for men new styleroupas maculinas: camisas y blusasplayeras para hombres: y2k topsoversized Tee shirt: vintage top shirtslana del rey: camisetas masculinographic t shirts: camisetas de hombreblusa mujer moda 2023: tee shirts hommeTops Type: TeesStyle: SportsSleeve Style: 1Sleeve Length(cm): ShortShirt male: camisetaPlace Of Origin: China (Mainland)Pattern Type: PrintOrigin: Mainland ChinaMaterial: PolyesterMale clothes: T-shirts maleItem Type: TopsHooded: NoGender: MENFabric Type: WAFFLECollar: V-NeckBrand Name: JACKALApplicable Season: Spring and SummerApplicable Scene: Casual",
    "product_photos": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQb99m_fqeBP-GAX-vEQHdVVLWRzm8ceoJJ_sd69Dq3Iv5RmkVZgJzBASK6RNLNvRALvt8WiK-VxFXRVt-gDbHCvN4uTtbo8w&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkogOk-l1MdXc8eJMXZ7dT5FZRVGiTl3qmveT-xFXm99ECxVQOXbwA876SMP5KBKzgjoumfiEx88-ejMVxYolIzxvSAgm7&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVkUwAMvbiB1qYnLxvEtSVAXtHbOOcHc7SW8sX6-FWmzWytqUh6e61icLAsBPMXUbzjW1GtlQfI5-t0AFkA3I6uVkIvGctsw&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDkb0ISgDfpdbS1LfJQ4ZY5Ex2w0B2rliR5m2vjWCT9m6NhtBeb8tmfFK8oOlfQ2GcShUHShy1ZeD0lyEfpo4exqxUxfd2&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYsnLcrwmAQS_DhykGSF7G2ZCD87l1Fy295qek-EYkdoTK-cCuBLQ0zlqC5Tdt3vb4yULFqEqshReGGquV9Oqq5leTYUHzBg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYtU45hdva0MCiPzODOA4nhN-cthmoEAqIj4qTxxRdrBdHMOiPKGWFaSiHD5WZtQ7g0wG_zi6xZyhDMa18FaszqA4Z-TH3&usqp=CAE"
    ],
    "typical_price_range": [
      "$21.59",
      "$26.99"
    ],
    "product_category":"menscloth",
    "product_rating": null,
    "product_id": "1:5281536044851431145"
  },
  {
    "product_title": "Men's Long Sleeve Flannel Shirt - All in Motion Black XXL",
    "product_description": "The pointed collar, full-length button-down front, buttoned-flap chest patch pockets, long sleeves with buttoned cuffs and back yoke complete the design with classic touches. All in Motion : Made for every move, priced for every day.",
    "product_photos": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSB4_MjzB4Srk0iUY00uyKSEQJ4okFRTekMqLBGIwAIpaVD8DKV8mq_3q840h88PXUyrzvjZPvry7hzXN3_8MMAP1QdIu9vTQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgWihIIqLKDJMoyJMUc5gpwZTeQI-PJ1MeCu-KzzHieJxWQ9OCBVBvjciLkyDBAg6NvlBAti_-JXXtTHOJ2RQyNqMwkIfdtA&usqp=CAE"
    ],
    "product_rating": 4.2,
    "typical_price_range": [
      "$32.30",
      "$32.30"
    ],
    "product_category":"menscloth",
    "product_id": "10591908472231267806"
  },
  {
    "product_title": "Men Scroll Print Button Up Shirt,Xxl",
    "product_description": "Dark Green Casual Long Sleeve Fabric Plants Shirt Non-Stretch Men Shirts, size features are:Bust: ,Length: Regular ,Sleeve Length:Long Sleeve",
    "product_photos": [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSzmztV4CpHUQO3qS-kRQ4MboYMz4M2Zv-X3EAt-uekzBhuhzzF-AcEDb5E6w1CMC63CsvbK_Y4FoIZGyreSy-Feur5sFS9Q&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRtHpnaaaYaZTAF8FYkbS4uvie7OqISEHAOs-bWoERCjNhyGq7fUV6eX8Izyz6JlsNR6c-ljEHHlDGTufmF6qwX3pIsR2gp&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdiOhM4FpANszbogwvvvFV4GwIMI-TROVaxMGFxQM4o-1kgTxBcjUaSWo2TsQNtl6hLJHQYPPap6PL59fT6rUhZE_nO4a-&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbDzV1k0gw3lg_oWMzUyK_Y14Z47ah8NClzDCH5SUqYycaJzJajQzkJ3hKZ3buf1Ur5mdBPGZJO1j90dDqIj-1Ib7OiN0CfQ&usqp=CAE"
    ],
    "product_rating": null,
    "typical_price_range": [
      "$8.00",
      "$10.50"
    ],
    "product_category":"menscloth",
    "product_id": "7675610649161238858"
  },
  {
    "product_title": "Winter Polar Fleece Male Coat Jacket For Men Solid Color Loose Warm Fashion Streetwear-style Man Luxury Jacket Fleeced Clothing",
    "product_description": "SPECIFICATIONSBrand Name: LLYGEOrigin: Mainland ChinaApplicable Season: Spring and AutumnMaterial: COTTONMaterial: PolyesterThickness: STANDARDLining Material: Spandex / PolyesterApplicable Scene: DailyStyle: CasualOuterwear Type: JacketsCuff Style: ConventionalGender: MENClothing Length: RegularItem Type: Outerwear & CoatsModel Number: ParkasPlace Of Origin: China (Mainland)Detachable Part: NONEType: LOOSECollar: STANDClosure Type: zipperSleeve Style: RegularHooded: NoPattern Type: SolidType1: fleece jacket menType2: Loose Warm Male JacketType3: Hip Hop StreetwearType4: Zip Up Stand JacketType5: Fleeced clothingType6: winter jackets for menType7: men jacketType8: Male coatType9: Coat men'sType10: luxury man jacket",
    "product_photos": [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRb-ftobuhShC3OIFxOgy0MiCUHRg-b01o3EIxhRKfdvpx4oZN5PjcmXejrIQVe8lSOYTB-c90Xb-ecnUW89KeOInVwiV8o&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSjcKEX5vlXysNw52SSHszNmFDMN9uP4mMBJy-FWtUdsHu1eRQ7ompS0FW7AzAVSqesiGkvVfQBXHlL0ybboFi-qJNmIX5&usqp=CAE"
    ],
    "product_category":"menscloth",
    "product_rating": null,
    "typical_price_range": null,
    "product_id": "1:18135341518612332636"
  }
  ,
        {
          "product_id": "8746027967747111064",
          "product_photos": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQf6m_-g5ECpKHoehFtg-LG6S7Eq4zfNm6eQgHj82lEkKEzymH7zb0E5NB3o6yXnCVEcl9NDrk766jr8XUk8wpetE3102du&usqp=CAE"
          ],
          "product_title": "Baby - Pink Cotton Sweatshirt - Size: NB (1-2M) - H&M",
          "product_description": "Sweatshirt in soft cotton fabric. Snap fasteners on one shoulder (sizes 2-4Y without snap fasteners), long sleeves, and ribbing at neck, cuffs, and hem. Soft, brushed inside.",
          "product_category":"kidscloth",
          "typical_price_range": ["$8.99", "$8.99"],
          "product_rating": 4.7
        },
        {
          "product_id": "14257805667584809403",
          "product_photos": [
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMRP9uzQFawisrTTiWAGJUQMXwQN9Of3BOl0gITJIgDG19iJxyl0SesP5WJK0AGm0r3FDb_rBMc17JpuOeLAhiOXUAQB_8xQ&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqMViQV0h8P8M7DDwzsHMTMt-K8efKM9bnw9evbl__zkfELcXAinqCPILojmkTz6iMgXvyPJVnAnMUTTZ_xI1X5jXFOgJD&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSrHNc3Xs3OaU5GgZebj1p5gNctTTp28est7HHBwTJb7o-H2XOXZiy5EYm9-PuP1CM7fQBwhwSPb-2rVPUzlYh7-NRFM0xFwQ&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0R92rjadjS2UBmwbHaB5MH_XhCsnoam-H296Tiy9bdaJo9gpSVso2yaV76zlcUm8IrUQGB5BzAgAXm89UtmjVYQOxuJvgcg&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQyzv18mQoGWJ5thDSSvoXrc_IXLaZblQfOG5GkSLWso_NHOQ92la5MOcMqenZc9ZwX8mNC0IKUAmlyYsDlVY3FMHVUvvj2XA&usqp=CAE"
          ],
          "product_title": "Kids' Mini New York Fleece Jogger Pant Set in Green Size 6/6x by Fashion Nova",
          "product_category":"kidscloth",
          "product_description": "Available In Green. Jogger Set Solid Fleece Hooded \"New York\" Verbiage Pullover Disclaimer: Due To The Printing Process A Difference In Saturation May Occur. Each Garment Is Unique. 60% Cotton 40% Polyester Imported | Kids' Mini New York Fleece Jogger Pant Set in Green Size 6/6X by Fashion Nova",
          "typical_price_range": ["$15", "$18"],
          "product_rating": 5
        },
        {
          "product_id": "13604205575703005997",
          "product_photos": [
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQb5WQs795LB6zfHGwT0Fum-u6DrI_1VbyYRFduWiyY0Aev2j_OKYzQSn3gMBIoa9QUkqON9ScOYSFID9JYooSO03MtOqTD8g&usqp=CAE",
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXqm_qjCp7iSlU6lW0TepeJI2QA2Ddpv77FIX29lCUCAdHs7pt1aZHVSp3y2SYQg8jsu6BKRYO4FrazBzIt9amELFLpLn3iA&usqp=CAE",
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVxN0I4ppbzQNJDK7TZv9RUqfTS9wiy7l2N9p6vccNERqYyvMxPfmjRcLWHLSqev3YaI5g3aRNfJNwTGADyYb0gpgck2f46w&usqp=CAE"
          ],
          "product_title": "Monogrammed Kids Ruffle Set",
          "product_description": "This personalized floral set is a fall must-have with its ruffle top and coordinating leggings. Perfect for every day or for special occasions, this ruffle pant and shirt set is available in a beautiful fall botanical print.The set includes a ruffled, long-sleeved top with snap button closure ont he back and a pair of comfy mauve leggings to match. Add their monogram to the front of the shirt — our exclusive preview tool makes it fun to create your favorite. Choose from several favorite monogram fonts and embroidery thread colors and make it your own. Pair this set with your favorite pair of Marleylilly Kids monogrammed sneakers and a big hair bow for the cutest look for your cutie!​ Made of a Cotton and Spandex blend.Kids are wearing their normal size. See Sizing Guide for more fit info.Purchase includes one monogrammed top and one non-monogrammed pair of leggings.",
          "product_category":"kidscloth",
          "typical_price_range": ["$27.99", "$27.99"],
          "product_rating": null
        },
        {
          "product_id": "753972138563366965",
          "product_photos": [
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9EbjapfoKMpvUhrMdKbiBPhpmnlYL_5mt_K6f1OT5Z88bBuVaYGJc4P29KEJ55IiLXGdR1YlD_3vki3l_TllrDl8Qi3Q6&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2KYEHYtH_di1Wlc_tmntF4QI9PtEKyquu49iUSwMPkQZ3c7-MoEs88WNLMbj-sLo1eS7cOU5UEkOPst6HZtOWCmpp0Hx9&usqp=CAE",
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRUXVjkU5p4v0zkATSvphQ2eA8eRquyctiExVjohjcDPs_vGctWd5VHhCC3qd__w_aMvpmBouRdK-ixUOuYHMKgTlOYHzV7&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8EDUNuJ3LURRmZ-bc8_B4o__EAI_f8DwymAAedNikzc2wTQi0XMdxHpUQ44nsBU66Y1QyuTL7b62_P1TvrxHA5KEycU2G&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRU86QQ000jRDfYHBjifbBJHT0jlljR2uyOqHs0V38zTyAR9A0D67v86NgE79lcxgS6LUAfQxB3CA1i-VdJz6njiWlxlYEP&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTG49AdH8CgtBKZ97YdPROJAfVbegteywpZhcYB24UYILfz3zwYADIHasYhBgHYcW4cfvRiLJJXceqGeCKALn6NrTrfKQO52A&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEsuy6xsBsyBcsdg9-dNZKxIZp1YjkcZ8yryDDZXLsPdik4AeYITFGMrIwTF6DRfV38C5LjII0trxSoowz_-uOMePHo6Nh&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKuTaNZy9yoVbVZaEM4ypdfqfSvZMYLj1HHi_D0pXI8tfvnJWaLo4FsnjCd1VltxYMEGzVFe2nWosAR4lqgb2qkbhlNAIxCw&usqp=CAE"
          ],
          "product_title": "Gap Kids Boys' Woven Shirt Set Lemonade L (10/12)",
          "product_description": "Introducing the Gap Boys Long Sleeve Woven Shirt & Short Sleeve T-Shirt Set, the ultimate combination of comfort and style! Crafted from cozy and soft 100% cotton, this set is perfect for keeping them comfortable throughout the day. Designed with an easy and relaxed fit, this combo has a classic short sleeve Gap logo tee and long sleeve woven button up shirt, for a touch of fun and functionality.Whether they need or want to look casual or a little more dressed up, this combination is perfect for everyone. Each piece can be worn separately or together for a more polished look. With timeless designs and versatile style, it is available in variety of styles, including a green gingham, light blue chambray and a red-blue plaid shirt. Remember to machine wash cold with similar colors and tumble dry low, so your kids’ new favorite shirts will maintain their quality, color, and fit after endless adventures.If your growing guys are heading to school, running around the playground, or just lounging at home, this woven shirt set is a go-to option for many occasions. Perfect to wear with shorts, a pair with jeans or even with a dressier pant. Available in sizes XS (4/5) - XL (14/16), the Gap Boys Woven Shirt & T-Shirt set is a versatile and comfortable essential that they'll reach for again and again. Don't miss out on this wardrobe must-have – order now and let your little ones experience the perfect blend of style and comfort!",
          "product_category":"kidscloth",
          "typical_price_range": ["$16.98", "$16.98"],
          "product_rating": 4.9
        },
        {
          "product_id": "5561814357501701682",
          "product_photos": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrf0OY1Kh3oJb6I416nxFRW7303AKL41CDzhSlCo-2ObKtgc-8AKKtOl4JLK48J5uHB4lZBGuMavF-1nLiYnQIa9Zb-JuV&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTu7ZBZO61QtJyYEdbhho2uhKHDv8LzlwFBWFczRtfaKSmZeU0LH4UHaJBQrdu4U5GEGaI0CNv5dFY3bCNjpIh0P5FAf9YIfg&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQrSBjlkmG-s806xP_pkr9drc628cv-d7OhYw5Xodwr5grVF9n9V2ovlvIBbAokk7RnYe4jN8Rbq-j1ysgC3DW41RFWQXmICQ&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRg5EGu0pV9m3jOIRvn1qBJ8JsDts7IMyntD4x43J3maoKfX_J4Cu_KxIgjJrqpEN11eFYtvTLZaai4UpEOpE4xb77QQmrdVQ&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGHnqXb_IJGPdWxeJAuP7DgtDFUKuhnhQ7Os_CgSwivRn82dAMSZPqiFQUvyCLd4EWTxrV1AfyqwImDyiDIfo-ArS1TEbhPA&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZRYPoWayygNeSjlzuoYqptyB_ORl8i8Cg_TGn7fy4-PUeIOpL8JtlCDgBxh6WjUBdEeCBjwSPmy7L1654-d-z4lBJ1aHE&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTT5B2wk_4lJ8Z0wAul84BTEqKvvhA7TlmFV3QpQBqS795bUrakZY9GKU7vnGJ9uju9jsiVN69zaXYob8vo-8u7AZWltWxvLw&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREuyvp5rUlSjxh5UMKeNogZrt42P_lOgZ7oFooIt-1j7icvPw6EZ4s-ygrXk2tJM3q-gKP9H_MzWFO37QRKFWUvnKBVf3P&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS2zNDtff9hEwCtt20gobXqHvY6Q89Q00JVAUAiDOx0IdvpG4jKJAtq4CI4O2Nt5m2NJCL3YJ_XUPLWfyXv0snwpn83vxPx&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSbg_meErlHss_6UObNpHdlvyRqvoqBwm_I5jT_1mMwQ66xJ-wEGl93aZkkteIglDvMYOx0eILY6wfJ2ZtGCNnriXfSoUTD&usqp=CAE",
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRnU9A4klUmGbTt9R0bOqXEy4OpWnJlwcdURpxT6mNf62VokoHK7rmtoUvCTyibSI92wyrYKW6eAjzWpNSjaZysLphTM6Cg&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQigKk1XJuQSl0hCCPszH3oLXW8mQJ9iX6V9P3ShoyRy3b5ZcJD8HXmBuMSE5pMBTT5cFc6Qzbcp5lIpIUqjHhDL8qb0SDcTQ&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRAVGPDeluXj-N7cuGOrvHi_ykIBH7Zceze-5HfYA3VMRfxPc9GzMCK19bKokiNYbz65AP-NJdV7usKD1IhOOU3FBUnj5tlAA&usqp=CAE",
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQN-jLW3YwIiVFtpf51phfcdnAf4orQxxawwsX9zlJHed_qObcZOD2ZOToN88a3dnMtocfCQ4_XJZ5gaRgE2orX5vmkp7u2Mg&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDa3fNXrBtrLDrodnaxs3lmOa1c30n0uz5Sut7Do3W96SJc68WlJDclxUIq2z_P9-_EqUBKXQaJaEKM_pTOdWJF2Tlg4Ib-w&usqp=CAE"
          ],
          "product_title": "Disney Princess Belle Big Girls T-Shirt and French Terry Shorts Outfit Set 10-12",
          "product_description": "Your little Disney fan is ready for a magical day in these cute sets featuring her favorite fairy tale princesses. These stylish short sleeve tee and shorts sets feature artwork of characters like Cinderella, Moana, Pocahontas, Snow White, Jasmine from Aladdin, Ariel from The Little Mermaid, Belle from Beauty and the Best, Tiana from The Princess and the Frog, Rapunzel from Tangled, Raya from Raya and the Last Dragon, and Elsa from Frozen. Made of a soft material that keeps your little girl comfortable, these pretty Disney Princess outfits are perfect for a day of fun and play.",
          "typical_price_range": ["$19.99", "$24.79"],
          "product_category":"kidscloth",
          "product_rating": 3.5
        },
        {
          "product_id": "9501407607895551295",
          "product_photos": [
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIuELn_MUlq-nEI0O-WALDnd_3x3TwkgFu_xYnDviZ6xQYe37Ii8ebrgpwe1esJWRvMTkN9YQMEQjXNhTyfQD5XSy3TWFL&usqp=CAE",
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAErhdn_Zdyy7GTdus9m4Exu2Z5rsq4rcBoay_zJ_KKCDVippV-v3KFlNhW0K-oVUsDd89wrPhMauuPopy88NnORR9Dl1o&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSg9VZTQz6F_V2WtdiHPjVHCzCgCaS-tGkyb3PjRMMJRX0qox7V-CnNukJEafDchlqFiOBPmC3oAwDt0ox6c-KRb-eTD1Wl&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ7ipZVt8UW8QH-HkvSq44BtDi005wh2g9nf63QX246nSn3DHkVPQF6P1XvpYTVtxCCOyjozIH2Af7NmIB12JaaZCa2NEZicQ&usqp=CAE",
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSRQMmOlWFlN0__4OSP0ZuOY-PIeFQmnUdaLGaJTlL9bUzniNnjAHoA6WgCmRaOh5WzFFWGJlxRVKovvGNcOTo2UwPb26yxdg&usqp=CAE",
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2M_PH5IwQtTwGok-OCaq0mzf4GLPeTPbcan88-1Pr-grCd2Y6FsAI5W4A3AoYlmI4ZtVWE62ijDsLqQUWo17CMX1iwKRe&usqp=CAE"
          ],
          "product_title": "Shein Girls' Knitted Loose Fit Jogger Pants with Smiling Face Pattern, Solid Color,12Y",
          "product_category":"kidscloth",
          "product_description": "White Casual Knitted Fabric Cartoon Harem/Genie Slight Stretch Tween Girls Pants, size features are:Bust: ,Length: Long ,Sleeve Length:",
          "typical_price_range": ["$8.00", "$8.00"],
          "product_rating": null
        },
        {
          "product_id": "7594173612044879579",
          "product_photos": [
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBLdlOk3dePSxJSl6RsRnlM_DAqUd9ixX59pvNvJWreCSa6VSxyS1ESZ8lWwykO0V_oQgJZ83eUqIPYRKqcaULnO9gz0kt&usqp=CAE"
          ],
          "product_category":"kidscloth",
          "product_title": "Justice Girls Cozy Sweatshirt & Jogger Outfit Set, Sizes Xs-xlp, Girl's, Size: Small(7-8), Green",
          "product_description": "A cute set for a cute Justice girl! The drawstring allows comfort, and the side seam pockets will keep her treasures close.",
          "typical_price_range": ["$35.00", "$35.00"],
          "product_rating": null
        
        }
      
 ]
  return loader?<Loader/>:(
    <div className='home'>
      <Header/>
      <ProductAdd/>
      <CategoryName/>
      <ProductListing data={data} title={'New Products'} />
      <Footer/>
    </div>
  )
}

export default Home
