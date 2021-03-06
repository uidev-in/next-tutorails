import React from 'react';
import Link from 'next/link';
const posts=[
    {
        "status": "ok",
        "totalResults": 38,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "Tasneem Akolawala",
                "title": "OnePlus 9 Pro Gets DisplayMate A+ Rating, Sets 13 Performance Records - Gadgets 360",
                "description": "OnePlus 9 Pro’s DisplayMate review is out. The phone’s AMOLED Wide Gamut Mode covers 139 percent of sRGB and 110 percent of DCI-P3, making OnePlus 9 Pro’s display colour gamut one of the widest ever measured by DisplayMate.",
                "url": "https://gadgets.ndtv.com/mobiles/news/oneplus-9-pro-displaymate-a-rating-colour-accuracy-brightness-performance-records-2398683",
                "urlToImage": "https://i.gadgets360cdn.com/large/oneplus_9_pro_first_impressions_screen_1616504704226.jpg",
                "publishedAt": "2021-03-25T06:23:09Z",
                "content": "OnePlus 9 Pro DisplayMate review is out and it scores an impressive A+ score by setting or matching 13 smartphone display performance records. It's been lauded for being visually indistinguishable fr… [+1888 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Yashwant Raj",
                "title": "Narendra Modi’s supporters in the US stem hostility in Chicago city council - Hindustan Times",
                "description": "The Chicago city council on Wednesday rejected a resolution to condemn the CAA and the revocation of Kashmir’s special constitutional status, handing Indian-descent supporters of the Indian Prime Minister a first victory in a battle that had seemed largely sk…",
                "url": "https://www.hindustantimes.com/world-news/narendra-modi-s-supporters-in-the-us-stem-hostility-in-chicago-city-council-101616651541864.html",
                "urlToImage": "https://images.hindustantimes.com/img/2021/03/25/1600x900/f393275e-8d2d-11eb-b5e7-48d3d3b0cffd_1616651540791.jpg",
                "publishedAt": "2021-03-25T05:52:21Z",
                "content": "The Chicago city council on Wednesday rejected a resolution to condemn the Citizenship Amendment Act (CAA) and the revocation of Kashmirs special constitutional status, handing Indian-descent support… [+3473 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "\"Created By Males, For Males\": Top Court On Rules For Women Joining Army - NDTV",
                "description": "The medical fitness requirement for women to get Permanent Commission in the army is \"arbitrary\" and \"irrational\", the Supreme Court said today while pronouncing verdict on petitions filed by around 80 women officers for permanent commission in the army.",
                "url": "https://www.ndtv.com/india-news/arbitrary-irrational-medical-fitness-criteria-for-women-to-get-permanent-commission-in-army-says-supreme-court-2398664",
                "urlToImage": "https://c.ndtvimg.com/2019-01/3g8v8tl_women-armed-forces_625x300_18_January_19.jpg",
                "publishedAt": "2021-03-25T05:51:12Z",
                "content": "Permanent Commission for women Army officers paves way for larger roles.\r\nNew Delhi: The medical fitness requirement for women to get Permanent Commission in the army is \"arbitrary\" and \"irrational\",… [+2047 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Coronavirus India Lockdown 2021 Live News: India reaches grim milestone of 50K daily cases, Covid ‘peaks’ in Ludhiana - The Financial Express",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMigwJodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlc3R5bGUvaGVhbHRoL2Nvcm9uYXZpcnVzLWluZGlhLWxvY2tkb3duLTIwMjEtbGl2ZS1uZXdzLW1hcmNoLTI1LWNvcm9uYS1saXZlLXVwZGF0ZXMtY292aWQtbmV3cy1pbmRpYS1tYWhhcmFzaHRyYS1iZWVkLWd1amFyYXQtcmFqYXN0aGFuLWRlbGhpLW11bWJhaS1wdW5lLW5vaWRhLWdoYXppYWJhZC10YW1pbC1uYWR1LXB1bmphYi1uaWdodC1jdXJmZXctbXV0YW50cy1sYXRlLzIyMTk4NjEv0gGIAmh0dHBzOi8vd3d3LmZpbmFuY2lhbGV4cHJlc3MuY29tL2xpZmVzdHlsZS9oZWFsdGgvY29yb25hdmlydXMtaW5kaWEtbG9ja2Rvd24tMjAyMS1saXZlLW5ld3MtbWFyY2gtMjUtY29yb25hLWxpdmUtdXBkYXRlcy1jb3ZpZC1uZXdzLWluZGlhLW1haGFyYXNodHJhLWJlZWQtZ3VqYXJhdC1yYWphc3RoYW4tZGVsaGktbXVtYmFpLXB1bmUtbm9pZGEtZ2hhemlhYmFkLXRhbWlsLW5hZHUtcHVuamFiLW5pZ2h0LWN1cmZldy1tdXRhbnRzLWxhdGUvMjIxOTg2MS9saXRlLw?oc=5",
                "urlToImage": null,
                "publishedAt": "2021-03-25T05:49:31Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": null,
                "title": "COVID-19 vaccination | Auto-scheduling for 2nd shot cancelled: All your questions answered - Moneycontrol",
                "description": "The auto-scheduling feature for vaccination was removed after the Centre updated the interval between two doses of Covishield vaccine to six-eight weeks, from four to six weeks apart.",
                "url": "https://www.moneycontrol.com/news/trends/health-trends/covid-19-vaccination-auto-scheduling-for-2nd-shot-cancelled-all-your-questions-answered-6691071.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/02/vaccine-770x433.jpeg",
                "publishedAt": "2021-03-25T05:40:27Z",
                "content": "As per the updated guidelines, COVID-19 vaccine beneficiaries have to manually schedule their appointment for their second shot. The auto-scheduling feature for vaccination was removed after the Cent… [+4104 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "Reported by Rica Roy, Written by Abhimanyu Bose",
                "title": "Shreyas Iyer To Miss IPL 2021 Due To Shoulder Injury - NDTVSports.com",
                "description": "Shreyas Iyer has been ruled out of IPL 2021 with a shoulder injury suffered during the first ODI between India and England.",
                "url": "https://sports.ndtv.com/ipl-2021/shreyas-iyer-to-miss-ipl-2021-due-to-shoulder-injury-2398626",
                "urlToImage": "https://c.ndtvimg.com/2021-03/g9jkjv7o_shreyas-iyer-injury-twitter_625x300_25_March_21.jpg",
                "publishedAt": "2021-03-25T05:28:00Z",
                "content": "Delhi Capitals captain Shreyas Iyer will miss the 2021 season of the Indian Premier League (IPL) due to a shoulder injury he picked up in the first ODI between India and England in Pune on Tuesday. I… [+1474 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BusinessLine"
                },
                "author": "Prashasti Awasthi",
                "title": "Covid-19 antibodies could last from days to decades based on infection severity - BusinessLine",
                "description": "Recovered patients from coronavirus with low levels of neutralising antibodies may still be protected from reinfection if they have robust immunity in the form of the body’s T-cells",
                "url": "https://www.thehindubusinessline.com/news/national/covid-19-antibodies-could-last-from-days-to-decades-based-on-infection-severity/article34157648.ece",
                "urlToImage": "https://www.thehindubusinessline.com/news/national/7mxrw0/article34157647.ece/ALTERNATES/LANDSCAPE_615/2021-03-24T220137Z902914909RC2YHM9NC54RRTRMADP3HEALTH-CORONAVIRUS-VACCINES-",
                "publishedAt": "2021-03-25T05:18:13Z",
                "content": "A new study has revealed that antibodies against Covid-19 may vary from person to person. In some, the antibodies last for some days, while in others, they can last for decades.\r\nThe potential of ant… [+2504 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "Jagmeet Singh",
                "title": "Vivo X60 Series to Launch in India Today: How to Watch Livestream, Expected Price, and Specifications - Gadgets 360",
                "description": "Vivo X60 series India launch is set for today. The launch is expected to bring the regular Vivo X60 alongside Vivo X60 Pro and Vivo X60 Pro+ to the country. It will be livestreamed online through Vivo India social media channels.",
                "url": "https://gadgets.ndtv.com/mobiles/news/vivo-x60-pro-plus-india-launch-today-march-25-watch-livestream-expected-price-specifications-2398634",
                "urlToImage": "https://i.gadgets360cdn.com/large/vivo_x60_series_india_launch_teaser_twitter_1616648490108.jpg",
                "publishedAt": "2021-03-25T05:14:18Z",
                "content": "Vivo X60 series India launch is set for today (March 25). The series is expected to have the regular Vivo X60 in addition to Vivo X60 Pro and Vivo X60 Pro+. The company originally launched Vivo X60 a… [+3928 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Staff Writer",
                "title": "India's second covid wave may last up to 100 days: SBI report - Mint",
                "description": "Increasing the speed of vaccination is the only way to win the battle against COVID-19 pandemic, the report said.",
                "url": "https://www.livemint.com/news/india/indias-second-covid-wave-may-last-up-to-100-days-sbi-report-11616647664326.html",
                "urlToImage": "https://images.livemint.com/img/2021/03/25/600x338/289ff67c5be7482bb5b6f0e99ba0d21f-289ff67c5be7482bb5b6f0e99ba0d21f-0_1616648034056_1616648053544.jpg",
                "publishedAt": "2021-03-25T04:58:18Z",
                "content": "India is currently seeing a spike in daily coronavirus cases with over 50,000 new infections were reported over the past 24 hours. The entire duration of second wave might last up to 100 days counted… [+4200 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "91mobiles"
                },
                "author": null,
                "title": "Realme 8 review: a lot like Realme 7, but with an AMOLED display - 91mobiles",
                "description": "Realme 8 price in India starts at Rs 14,999 and we take a look at whether the phone is a worthy upgrade to the Realme 7.",
                "url": "https://www.91mobiles.com/hub/realme-8-review/",
                "urlToImage": "https://static.hub.91mobiles.com/wp-content/uploads/2021/03/realme-8-review-image-feat.jpg",
                "publishedAt": "2021-03-25T04:30:27Z",
                "content": "We take a look at whether the phone is a worthy upgrade to the Realme 7\r\nWe are only three months into 2021 and Realme is already having a busy year. The company launched the Realme X7 and X7 Pro in … [+7503 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Firstpost"
                },
                "author": null,
                "title": "Astronomers capture image of the magnetic field around M87's black hole - Firstpost",
                "description": "Black holes are often detected by the radiation produced when their gravity pulls in surrounding gases, a process called accretion.",
                "url": "https://www.firstpost.com/tech/science/astronomers-capture-image-of-the-magnetic-field-around-m87s-black-hole-9460761.html",
                "urlToImage": "https://images.firstpost.com/wp-content/uploads/2021/03/m87_lo_april11_polarimetric_average_image_ml_deband-cc-8bit-srgb-2.jpg",
                "publishedAt": "2021-03-25T04:18:51Z",
                "content": "Agence France-PresseMar 25, 2021 09:48:51 IST\r\nThe astronomers who gave the world its first true glimpse of a black hole have produced another landmark image, this time capturing the polarised light … [+3598 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "Kshitij Rawat",
                "title": "Godzilla vs Kong movie review: The colossal showdown recreates classic monster movie magic - The Indian Express",
                "description": "Godzilla vs Kong movie review: This MonsterVerse movie would probably look spectacular wherever you watch it, but it absolutely dazzles on the big screen with epic monster-on-monster action and thunderous, almost deafening sound effects.",
                "url": "https://indianexpress.com/article/entertainment/movie-review/godzilla-vs-kong-movie-review-7243672/",
                "urlToImage": "https://images.indianexpress.com/2021/03/godzilla-vs-kong-1200-3.jpg",
                "publishedAt": "2021-03-25T04:00:56Z",
                "content": "Godzilla vs Kong cast: Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shun Oguri, Eiza González, Julian Dennison, Kyle Chandler, and Demián BichirGodzilla vs Kong director:… [+3357 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "Here’s what Hrithik Roshan thinks about ex-wife Sussanne Khan's ‘gender fluid’ look - Times of India",
                "description": "Recently Sussanne posted a picture collage comprising two photos of herself that featured her in a gender-fluid loo",
                "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/heres-what-hrithik-roshan-thinks-about-ex-wife-sussanne-khans-gender-fluid-look/articleshow/81682081.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-81682055,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-801477/81682055.jpg",
                "publishedAt": "2021-03-25T03:59:00Z",
                "content": "Hrithik Roshan's ex-wife and interior designer Sussanne Khan is quite active on social media.\r\nRecently Sussanne posted a picture collage comprising two photos of herself that featured her in a gende… [+1345 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Share Market LIVE: Sensex gives up 49,000 on opening, Nifty below 14,500; Infosys, RIL drag indices lower - The Financial Express",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiugFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9tYXJrZXQvc2hhcmUtbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy1zZW5zZXgtbmlmdHktcnVwZWUtdnMtZG9sbGFyLWxheG1pLW9yZ2FuaWMtaW5kdXN0cmllcy1jcmFmdHNtYW4tYXV0b21hdGlvbi1saXN0aW5nLWRheS1tYXJjaC0yNS10aHVyZHNkYXkvMjIxOTgwOC_SAb8BaHR0cHM6Ly93d3cuZmluYW5jaWFsZXhwcmVzcy5jb20vbWFya2V0L3NoYXJlLW1hcmtldC10b2RheS1saXZlLXVwZGF0ZXMtc2Vuc2V4LW5pZnR5LXJ1cGVlLXZzLWRvbGxhci1sYXhtaS1vcmdhbmljLWluZHVzdHJpZXMtY3JhZnRzbWFuLWF1dG9tYXRpb24tbGlzdGluZy1kYXktbWFyY2gtMjUtdGh1cmRzZGF5LzIyMTk4MDgvbGl0ZS8?oc=5",
                "urlToImage": null,
                "publishedAt": "2021-03-25T03:48:14Z",
                "content": null
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Gaurav Gupta",
                "title": "Dazzling debutants for Team India - Times of India",
                "description": "Cricket News: There was a time when newcomers would need time to settle down before finding their feet in international cricket. Not anymore, it seems. Thanks to th",
                "url": "https://timesofindia.indiatimes.com/sports/cricket/news/dazzling-debutants-for-team-india/articleshow/81681746.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-81681724,width-1070,height-580,imgsize-104057,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2021-03-25T03:34:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Bold Diaries: Virat Kohli to open for RCB in Vivo IPL 2021 - Royal Challengers Bangalore",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Tl84YzRZSllPZ3PSAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2021-03-25T03:30:03Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Staff Writer",
                "title": "Petrol, diesel prices today slashed for 2nd time in 2021. Check rates in your city - Mint",
                "description": "After today's cut, a litre of petrol in Delhi costs  ₹90.78, down from  ₹90.99.Meanwhile, diesel price in the national capital has now come down to  ₹81.10, down from  ₹81.30 yesterday",
                "url": "https://www.livemint.com/news/india/petrol-diesel-prices-today-slashed-for-2nd-time-in-2021-check-rates-in-your-city-11616642284868.html",
                "urlToImage": "https://images.livemint.com/img/2021/03/25/600x338/2021-03-24T023416Z_1_LYNXMPEH2N06G_RTROPTP_3_GLOBAL-OIL-KEMP_1616642810741_1616642822599.JPG",
                "publishedAt": "2021-03-25T03:28:12Z",
                "content": "Petrol and diesel prices were slashed for the second time this year after a sharp fall in global crude oil prices. State-run oil marketing companies (OMCs) on Thursday cut petrol and diesel prices by… [+1970 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "\"Hope I See You And Hug You Soon,\" Sonam Kapoor, Currently In London, Writes For Mom Sunita On Her Birthday - NDTV",
                "description": "\"For everything I am today, my mother's love showed me the way,\" wrote Sonam in her post for mom Sunita Kapoor",
                "url": "https://www.ndtv.com/entertainment/hope-i-see-you-and-hug-you-soon-sonam-kapoor-currently-in-london-writes-for-mom-sunita-on-her-birthday-2398551",
                "urlToImage": "https://c.ndtvimg.com/2021-03/3j8n8jm8_sonam-kapoor-sunita-kapoor_625x300_25_March_21.jpg",
                "publishedAt": "2021-03-25T03:08:00Z",
                "content": "Sonam Kapoor shared this photo. (Image courtesy: sonamkapoor)\r\nHighlights\r\n<ul><li>On Thursday, Sonam shared a few pictures of herself and her mom \r\n</li><li>\"Love you mama,\" she wrote \r\n</li><li>\"Ha… [+1643 chars]"
            },
            {
                "source": {
                    "id": "the-hindu",
                    "name": "The Hindu"
                },
                "author": "AP",
                "title": "Kamala Harris put in charge of leading response to U.S. border crisis as Joe Biden faces down critics - The Hindu",
                "description": "In delegating the matter to Ms. Harris, President Biden is seeking to replicate a dynamic that played out when he served as President Barack Obama’s Vice President.",
                "url": "https://www.thehindu.com/news/international/kamala-harris-put-in-charge-of-leading-response-to-us-border-crisis-as-joe-biden-faces-down-critics/article34157047.ece",
                "urlToImage": "https://www.thehindu.com/news/international/58yi7a/article34157046.ece/ALTERNATES/LANDSCAPE_615/kamalaharrisjoebiden",
                "publishedAt": "2021-03-25T03:07:00Z",
                "content": "President Joe Biden has tapped Vice President Kamala Harris to lead the White House effort to tackle the migration challenge at the U.S. southern border and work with Central American nations to addr… [+6457 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": null,
                "title": "Top 10 things to know before the market opens - Moneycontrol.com",
                "description": "Trends on SGX Nifty indicate a negative opening for the index in India with a 29 points loss.",
                "url": "https://www.moneycontrol.com/news/business/markets/top-10-things-to-know-before-the-market-opens-9-6690301.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/02/Sensex_nifty_BSE_NSE_traders-770x433.jpg",
                "publishedAt": "2021-03-25T02:20:10Z",
                "content": "The Indian stock market is expected to open in the red as trends on SGX Nifty indicate a negative opening for the index in India with a 29 points loss.\r\nThe BSE Sensex plunged 871.13 points, or 1.74 … [+6125 chars]"
            }
        ]
    }
];

export default function Posts(){
    return (
        <ul>
        {posts[0].articles.map((post)=>{
            return(
                <li key={post.source.id}>
                {/* <Link href={"/posts/" + post.source.id}>
                    <h3>{post.source.name}</h3>
                </Link> */}
                <p>{post.description}</p>
            </li>
            );
        })}
    </ul>
    );
}