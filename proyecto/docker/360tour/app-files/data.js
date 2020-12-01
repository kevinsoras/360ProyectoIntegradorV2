var APP_DATA = {
  "scenes": [
    {
      "id": "0-area1",
      "name": "Area1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.9587012616027426,
        "pitch": -0.0760730852294742,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.177854606988383,
          "pitch": 0.054326096728924966,
          "rotation": 0,
          "target": "1-area2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.32337156661255406,
          "pitch": -0.2788276643050924,
          "title": "Oficinas-Fia",
          "text": "Lugar donde se realizan peticiones, tramites, etc."
        },
        {
          "yaw": 1.0385251361941492,
          "pitch": -0.11549058024183978,
          "title": "Talleres de Arquitectura",
          "text": "Lugar de ensayos y tiempo compartido para&nbsp; proyectos"
        }
      ]
    },
    {
      "id": "1-area2",
      "name": "Area2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4893903509392645,
          "pitch": 0.10298814816217394,
          "rotation": 0,
          "target": "0-area1"
        },
        {
          "yaw": -0.10992162568066988,
          "pitch": 0.24058199641109113,
          "rotation": 0,
          "target": "2-area3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.827308833076497,
          "pitch": -0.013497836807356833,
          "title": "Salones-Primera planta",
          "text": "Lugares de talleres y centro de estudios<div><br></div>"
        }
      ]
    },
    {
      "id": "2-area3",
      "name": "Area3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.809703041292276,
          "pitch": -0.13363496414583764,
          "rotation": 0,
          "target": "1-area2"
        },
        {
          "yaw": -2.937593889161821,
          "pitch": -0.21817188595956694,
          "rotation": 0,
          "target": "3-area4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6877377937341862,
          "pitch": -0.4074049307116461,
          "title": "Segundo piso",
          "text": ""
        }
      ]
    },
    {
      "id": "3-area4",
      "name": "Area4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.95847492541904,
          "pitch": 0.11140474459085326,
          "rotation": 0,
          "target": "2-area3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.42952178739771085,
          "pitch": -0.2557367695733461,
          "title": "Servidores Fia",
          "text": ""
        }
      ]
    }
  ],
  "name": "360upeu",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
