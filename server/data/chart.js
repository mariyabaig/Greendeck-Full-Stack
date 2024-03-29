const express = require('express')
const app = express()

app.get('/chart',(req,res)=>{
    res.send([
        {
            "id": "e91affdda953485ca70c8bd30449c0b1",
            "dateCreated": "2022-12-29T07:24:19.736319Z",
            "dateUpdated": "2022-12-29T07:24:19.736342Z",
            "organizationId": "a6121c2c39f04a95a8f1698260ad651f",
            "startTime": "2022-12-28T20:00:00+00:00",
            "endTime": "2022-12-28T22:00:00+00:00",
            "incidentStatus": "close",
            "measure": "ga:visitors",
            "metricsId": "0482520d3e5b1076b1f31b27abe9a5a4",
            "score": 0,
            "feedback": null,
            "stats": {
                "id": "f4241aa52be54414924c367104e3d048",
                "dateCreated": "2022-12-29T07:24:19.835608Z",
                "dateUpdated": "2022-12-29T07:24:19.835631Z",
                "dateArchived": null,
                "dateDeleted": null,
                "status": "live",
                "archiveReference": null,
                "tags": [],
                "topDrivers": [
                    [
                        [
                            "ga:userType=Returning Visitor"
                        ],
                        0.5578588782855243,
                        {
                            "change": 5,
                            "currentValue": 10,
                            "previousValue": 5,
                            "absoluteChange": 100,
                            "effectiveChange": 62.5
                        }
                    ],
                    [
                        [
                            "ga:userType=New Visitor",
                            "ga:visitorType=New Visitor"
                        ],
                        0.06676569631226129,
                        {
                            "change": 3,
                            "currentValue": 4,
                            "previousValue": 1,
                            "absoluteChange": 300,
                            "effectiveChange": 37.5
                        }
                    ]
                ],
                "rcaStartTime": "2022-12-28T19:00:00Z",
                "rcaEndTime": "2022-12-28T20:00:00Z",
                "previousValue": 6,
                "currentValue": 14,
                "absoluteChange": "133.33",
                "incident": "e91affdda953485ca70c8bd30449c0b1"
            },
            "header": "Google Analytics/GTM GA/ga:visitors",
            "content": "ga:visitors increased by 133.33% from 6.00 to 14.00 between 19:00 December 28, 2022 and 20:00 December 28, 2022.         ",
            "viewers": [
                {
                    "id": "74a09ff10af447ed93cf650af55a2374",
                    "name": "user1",
                    "username": "user1",
                    "email": "user1@quantive.com",
                    "avatar": {
                        "avatarType": "letter_avatar"
                    }
                }
            ],
            "source": {
                "id": "15eaaaf38837499e9fa10f6889c0b748",
                "dateCreated": "2022-08-24T07:12:13.920000Z",
                "dateUpdated": "2022-08-24T07:12:13.920000Z",
                "dateArchived": null,
                "dateDeleted": null,
                "archiveReference": null,
                "tags": [],
                "name": "Google Analytics",
                "status": "active",
                "slug": "google-analytics",
                "category": "Analytics",
                "queryEditor": false,
                "description": "Improve sales and conversions by connecting your Google Analytics data",
                "type": "inbound",
                "direction": "pull",
                "logo": "https://greendeck-cdn.s3.amazonaws.com/cliff_icons/google-analytics.png"
            },
            "pastInsights": 4,
            "isSaved": false,
            "frequency": 86400,
            "commentCount": 0
        }
    ])
})