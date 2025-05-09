export const questions = {
  "questions": [
    {
      "id": 1,
      "text": "我感到每天都在朝自己的目标迈进",
      "reverse_scoring": false
    },
    {
      "id": 2,
      "text": "有麻烦的时候，我通常能想到一些应付的方法",
      "reverse_scoring": false
    },
    {
      "id": 3,
      "text": "一些技能（比如跑步、演讲、写作），即使我再努力，也不会学得多好",
      "reverse_scoring": true
    },
    {
      "id": 4,
      "text": "我认为逆境有时候是对成长的一种帮助",
      "reverse_scoring": false
    },
    {
      "id": 5,
      "text": "当一个有难度的工作需要人做时，我不希望那人是我",
      "reverse_scoring": true
    },
    {
      "id": 6,
      "text": "我不喜欢所有新鲜且经常变化的事",
      "reverse_scoring": true
    },
    {
      "id": 7,
      "text": "无论是什么事情，一旦开始了我就会坚持下去直至完成",
      "reverse_scoring": false
    },
    {
      "id": 8,
      "text": "我觉得与结果相比，做一件事的过程更能够帮助人成长",
      "reverse_scoring": false
    },
    {
      "id": 9,
      "text": "当得知一个坏消息时，我的情绪通常会比其他人更激烈",
      "reverse_scoring": true
    },
    {
      "id": 10,
      "text": "我经常试图摆脱脑海中一些不必要的想法",
      "reverse_scoring": true
    },
    {
      "id": 11,
      "text": "我总是需要克制自己想要一直休闲、娱乐、放松的欲望",
      "reverse_scoring": true
    },
    {
      "id": 12,
      "text": "失败总是让我在相当长一段时间内感到气馁",
      "reverse_scoring": true
    },
    {
      "id": 13,
      "text": "我在工作或学习时，脑子里常会想到其他不相干的事情",
      "reverse_scoring": false
    },
    {
      "id": 14,
      "text": "我常常能在自己所做的事情中找到乐趣",
      "reverse_scoring": false
    },
    {
      "id": 15,
      "text": "当被迫在压力下工作时，我感到心烦意乱又极不情愿",
      "reverse_scoring": true
    },
    {
      "id": 16,
      "text": "当碰到一个没有把握解决的难题时，我会非常兴奋、快乐",
      "reverse_scoring": false
    },
    {
      "id": 17,
      "text": "我知道自己现在是为了什么而努力",
      "reverse_scoring": false
    },
    {
      "id": 18,
      "text": "我相信自己能有效应对任何生活中突发的意外",
      "reverse_scoring": false
    },
    {
      "id": 19,
      "text": "不管我所做的事成绩好坏，我都从不怀疑自己的学习能力",
      "reverse_scoring": true
    },
    {
      "id": 20,
      "text": "经历挫折后我一般会变得更加成熟和有经验",
      "reverse_scoring": false
    },
    {
      "id": 21,
      "text": "我不喜欢做那些我不知道能否顺利完成的事",
      "reverse_scoring": true
    },
    {
      "id": 22,
      "text": "我不喜欢在不熟悉的环境中做事",
      "reverse_scoring": true
    },
    {
      "id": 23,
      "text": "我喜欢那种需要全力以赴才能完成的工作",
      "reverse_scoring": false
    },
    {
      "id": 24,
      "text": "不管一件事的结果如何，我相信自己在过程中付出的努力是不会白费的",
      "reverse_scoring": false
    },
    {
      "id": 25,
      "text": "每次有情绪波动的时候，我都能第一时间觉察",
      "reverse_scoring": true
    },
    {
      "id": 26,
      "text": "我常常试着不去想、也不和人讨论让我烦恼的事情",
      "reverse_scoring": true
    },
    {
      "id": 27,
      "text": "我经常得抵抗美食的诱惑",
      "reverse_scoring": true
    },
    {
      "id": 28,
      "text": "我一般要过很久才能忘记不愉快的事情",
      "reverse_scoring": true
    },
    {
      "id": 29,
      "text": "我在工作或学习时，对周围的动静比如有人说话和倒水听得很清楚",
      "reverse_scoring": true
    },
    {
      "id": 30,
      "text": "只要是能获得满足感的工作，哪怕没有报酬我也愿意做",
      "reverse_scoring": false
    },
    {
      "id": 31,
      "text": "面对压力时，我会思考自己做了什么事情要承受这些",
      "reverse_scoring": true
    },
    {
      "id": 32,
      "text": "面对的事越困难，我越能集中自己的全部精力去面对",
      "reverse_scoring": false
    }
  ],
 
  "scoring": {
    "options": [
      {"label": "完全不符", "value": 5},
      {"label": "不太符合", "value": 4},
      {"label": "一般", "value": 3},
      {"label": "比较符合", "value": 2},
      {"label": "完全符合", "value": 1}
    ],
    "reverse_options": [
      {"label": "完全不符", "value": 1},
      {"label": "不太符合", "value": 2},
      {"label": "一般", "value": 3},
      {"label": "比较符合", "value": 4},
      {"label": "完全符合", "value": 5}
    ]
  },
  "dimensions": {
    "closedness": [1, 2, 3, 4, 17, 18, 19, 20],
    "balance": [5, 6, 21, 22],
    "linearity": [7, 8, 23, 24],
    "disorder": [9, 10, 11, 12, 25, 26, 27, 28],
    "focus": [13, 14, 15, 16, 29, 30, 31, 32],
    "main_dimensions": {
      "closedness_degree": [1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24],
      "work_resistance": [9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 27, 28, 29, 30, 31, 32]
    }
  },
  // "questions": [
  //     {
  //     "id": 1,
  //     "text": "我感到每天都在朝自己的目标迈进",
  //     "reverse_scoring": false
  //   },
  // ]
}
