var gets = (s) => {
    let get = ['A', 'B', 'C', 'D'];
    for (let i in get)
        if (get[i] == s) return i;

};
var english = {
    ec: [{
            top: "What's the current exchange rate between US dollar and RMB?",
            answer: '现在美元和人民币的兑换率是多少？'
        },
        {
            top: "I often have trouble with my computer, and I usually ask my children for help.",
            answer: '我的电脑经常出问题，我经常向我的孩子求助。'
        },
        {
            top: "Hold on a minute, I'll just get a pen.",
            answer: '等一下，我去拿支笔。'
        },
        {
            top: "Mary is fond of dancing and listening to music.",
            answer: '玛丽喜欢跳舞和听音乐。'
        },
        {
            top: "In spite of the bad weather, we finished the work on schedule.",
            answer: '尽管天气不好，我们还是按时完成了工作。'
        },
        {
            top: "This hotel reminds me of the one we stayed in last year.",
            answer: '这家旅馆使我想起我们去年住过的那家。'
        },
        {
            top: "All the wishes will come true.",
            answer: '所有的愿望都会实现。'
        },
        {
            top: "I suggest that you go to see your doctor at once.",
            answer: '我建议你立刻去看医生。'
        },
        {
            top: "Two businessmen were invited to a party of a professor.",
            answer: '两个商人被邀请参加一个教授的聚会。'
        },
        {
            top: "Come to my office whenever you have questions.",
            answer: '有问题就来我办公室。'
        }
    ],
    radio: [{
        top: "Thanks again for calling. _______________________.",
        option: [
            ["A. That’s all."],
            ["B. My pleasure."],
            ["C. It matters."],
            ["D. I don’t think so."]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "Excuse me, sir. Is there a station near here? _______________________.",
        option: [
            ["A. Sorry, I’m a stranger here"],
            ["B. You should take the subway. "],
            ["C. You can miss it."],
            ["D. It’s far from here."]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "_______________________. My family name is Zhang",
        option: [
            ["A. Would you give me your name?"],
            ["B. Where is your family? "],
            ["C. Are you free? "],
            ["D. What’s your father?"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "Tom, you‘d better not do it again. __________________________.",
        option: [
            ["A. No. I don’t like it. "],
            ["B. Yes, I’m better."],
            ["C. No, I won’t"],
            ["D. Yes, I will."]
        ],
        get answer() { return this.option[gets('C')] }
    }, {
        top: "I’m very sorry that this happened. _____________________________",
        option: [
            ["A. Never mind"],
            ["B. Thanks a lot."],
            ["C. Well done."],
            ["D. Ok, please."]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "Is there anything I can do for you? _____________________________",
        option: [
            ["A. Yes, of course what’s it?"],
            ["B. Let me give first aid to her. "],
            ["C. Please give me a cup of water."],
            ["D. No, thank you for your help. "]
        ],
        get answer() { return this.option[gets('C')] }
    }, {
        top: `What day is today?
        ____________________________.`,
        option: [
            ["A. It’s may 15th"],
            ["B. It’s Friday."],
            ["C. It’s five o’clock"],
            ["D. It’s two hours. "]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "Here is a card for you with my best wishes. ____________________________.",
        option: [
            ["A. I like it very much, thank you."],
            ["B. Well done. "],
            ["C. Enjoy yourself."],
            ["D. You are welcome."]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "I’ll meet you outside the cinema in an hour. Ok? ______________________________.",
        option: [
            ["A. Enjoy yourself "],
            ["B. It doesn’t matter. "],
            ["C. It’s right."],
            ["D. Yes, that’s a good idea."]
        ],
        get answer() { return this.option[gets('D')] }
    }, {
        top: "I’ve really enjoyed working with you, ______________________________.",
        option: [
            ["A. Everything will go very well."],
            ["B. Live talking with you."],
            ["C. How nice of you to say so!"],
            ["D. It’s very clever of you."]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "Nobody ________what his name is.",
        option: [
            ["A. Know"],
            ["B. knows"],
            ["C. known"],
            ["D. have known"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "Sorry, Mr Green , I have ____my housework at home.",
        option: [
            ["A. changed"],
            ["B. left"],
            ["C. in clued"],
            ["D remembered"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: " Your performance in the driving test didn’t reach the required standard _____, you failed.",
        option: [
            ["A. in other words "],
            ["B. after all"],
            ["C. in the end"],
            ["D. at the same time"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: `-----When did you buy the new mobile phone. 
        -----Well. I ______ it for half a month. `,
        option: [
            ["A. bought"],
            ["B. will buy"],
            ["C. have bought"],
            ["D. have had"]
        ],
        get answer() { return this.option[gets('D')] }
    }, {
        top: "It is very necessary for us ______wild animals.",
        option: [
            ["A. protect"],
            ["B. protecting"],
            ["C. protected"],
            ["D. to protect"]
        ],
        get answer() { return this.option[gets('D')] }
    }, {
        top: "My watch usually ________good time, but today it is five minutes fast. ",
        option: [
            ["A. keeps"],
            ["B. makes "],
            ["C. goes"],
            ["D. gains"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "We were familiar _____ each other.",
        option: [
            ["A. in"],
            ["B with "],
            ["C. to"],
            ["D. for"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "My brother is single. ____________?",
        option: [
            ["A. So is Tom."],
            ["B. So does Tom"],
            ["C. So Tom is"],
            ["D. Tom is so"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "____is nothing wrong with my bike.",
        option: [
            ["A. There"],
            ["B. That"],
            ["C. It"],
            ["D. Here"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "The manger can’t see you at the moment. He____ a meeting.",
        option: [
            ["A. had"],
            ["B is having"],
            ["C. had"],
            ["D. has had"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "Jim’s bike ____last night.",
        option: [
            ["A. was stolen"],
            ["B. stole"],
            ["C. has stolen"],
            ["D. is stolen"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "It’s possible for us _____a better job if we study hard.",
        option: [
            ["A. find"],
            ["B. to find"],
            ["C. finding"],
            ["D. finds"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "I don’t see any ____in arguing about this.",
        option: [
            ["A. thing"],
            ["B. point"],
            ["C. trouble"],
            ["D. way"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "Do you mind ______ the window ?",
        option: [
            ["A. opening"],
            ["B. open"],
            ["C. opened"],
            ["D. to open"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "We have ____a single room with a bath for you in the hotel.",
        option: [
            ["A. bought"],
            ["B. reserved"],
            ["C. taken"],
            ["D. made"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "I _______this book for two weeks. I have to return it now.",
        option: [
            ["A. borrowed"],
            ["B. kept"],
            ["C. have kept"],
            ["D. have borrowed"]
        ],
        get answer() { return this.option[gets('C')] }
    }, {
        top: "Mary took advantage of(利用) the fine______  to do a day`s work in the garden.",
        option: [
            ["A. climate "],
            ["B. air"],
            ["C. weather"],
            ["D. sky"]
        ],
        get answer() { return this.option[gets('C')] }
    }, {
        top: "Every society has it`s own customs and_______ of acting.",
        option: [
            ["A. method"],
            ["B. ways"],
            ["C. dreams"],
            ["D. tools"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "Some people like coffee, _____others like tea.",
        option: [
            ["A. because"],
            ["B. which"],
            ["C. while"],
            ["D. as if "]
        ],
        get answer() { return this.option[gets('C')] }
    }, {
        top: "Just be patient. I will ______the matter as soon as possible.",
        option: [
            ["A. look for"],
            ["B. look out"],
            ["C.look like"],
            ["D.look into"]
        ],
        get answer() { return this.option[gets('D')] }
    }, {
        top: " The house where he lived ___ now.",
        option: [
            ["A. is being rebuilt"],
            ["B. rebuilds "],
            ["C. was being rebuilt"],
            ["D. was rebuilt"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "Hardly ____ home when it began to rain.",
        option: [
            ["A. did he leave "],
            ["B. he left"],
            ["C. he had left"],
            ["D. had he left"]
        ],
        get answer() { return this.option[gets('D')] }
    }, {
        top: "If Mr. Smith ___ back. Please let me know. ",
        option: [
            ["A. to come"],
            ["B. come"],
            ["C. will come"],
            ["D. comes"]
        ],
        get answer() { return this.option[gets('D')] }
    }, {
        top: "Thank you for ___ me the book.",
        option: [
            ["A. lent "],
            ["B. lending"],
            ["C. borrowing "],
            ["D. borrowed"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "A new library ___ in our school next year.",
        option: [
            ["A. will be built "],
            ["B. is built"],
            ["C. will build"],
            ["D. builds"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "Do you know _______ child it is on the grass?",
        option: [
            ["A. whose"],
            ["B. what"],
            ["C. that"],
            ["D. whom"]
        ],
        get answer() { return this.option[gets('A')] }
    }, {
        top: "If I _____ rich, I might buy the house. ",
        option: [
            ["A. am"],
            ["B. were"],
            ["C. are"],
            ["D. be"]
        ],
        get answer() { return this.option[gets('B')] }
    }, {
        top: "I have______ to tell you.",
        option: [
            ["A. important anything"],
            ["B. important something"],
            ["C. anything important"],
            ["D. something important"]
        ],
        get answer() { return this.option[gets('D')] }
    }, {
        top: "____ he told me had nothing to do with this matter.",
        option: [
            ["A. That"],
            ["C. What"],
            ["C. What"],
            ["D. Which"]
        ],
        get answer() { return this.option[gets('C')] }
    }, {
        top: "I'm going without him ______ he comes soon.",
        option: [
            ["A. While"],
            ["B. when"],
            ["C. unless"],
            ["D. since"]
        ],
        get answer() { return this.option[gets('C')] }
    }],
    table: { ec: '翻译', radio: '单选' }

}