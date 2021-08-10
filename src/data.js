// 网页标题
const title = 'XXX - 前端开发 - 简历'

// 基本信息
const basicInfo = {
    fullName: '姓名',
    job: '应聘岗位',
    birthDate: '出生年月',
    email: '电子邮箱',
    mobile: '手机号码',
    wechat: '微信号',
    salary:'期望薪资',
    address:'目前地点/期望地点'
}

// 简历文件下载地址
const resumeDownloadLink = 'https://abc.com/xx.pdf'


// 工作经历
const workExperience = [
    {
        companyName: '公司名称1',
        job: '职位1',
        // 工作时长，可以自行决定写什么字符串
        duration: '2020.03-2021.02',
        content:[
            '项目1',
            '项目1内容',
        ],
    },
    {
        companyName: '公司名称2',
        job: '职位2',
        duration: '工作时长',
        content:[
            '项目2',
            '项目2内容',
            '每一个字符串为一行，如果需要空行间隔请新增一个空字符串',
            '',
            '项目3',
            '项目3内容',
        ],
    },
]

// 教育经历
const educationExperience = [
    {
        schoolName:'学校名',
        degree:'程度',
        major:'专业',
        duration:'学习时长'
    },
    {
        schoolName:'学校名',
        degree:'本科',
        major:'计算机网络技术',
        duration:'2011-2015'
    },
]

// 项目经历
const projectExperience = [
    {
        name:'项目名称',
        content:'滴一门窗配套管理后台',
        // 链接，可以是线上地址，也可以是开源仓库地址，如果没有则删除此项
        link:'',
        // 截图的URL列表，如果没有则设置为空数组
        pictureList:[
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-tpxtzduzbujqb9a12e/5c2822c4-e330-4fad-98ae-da88bc717c87.png',
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-tpxtzduzbujqb9a12e/b803ec89-524a-4f68-91b1-b53beef77823.png',
        ],
        // 二维码图片地址，可用于展示小程序二维码或者应用下载二维码等
        QRCode:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-tpxtzduzbujqb9a12e/12cf6090-57c0-11eb-8a36-ebb87efcf8c0.png',

    },
]

const techStack = {
    Web: ['HTML(5)', 'CSS(3)', 'JS(ES6+)'],
    MVVM框架: ['Vue(了解Vue3)', 'React(了解)'],
    UI框架: ['uni-app', 'ElementUI','uView UI'],
    后端:['Serverless(uniCloud)','NodeJS(了解)'],
}


// 自我描述
const selfIntroduction = '前端开发者，能独立完成桌面端、移动端前端开发，了解后端开发（可以使用Serverless技术开发后端），熟悉项目整个周期流程。'

export {
    basicInfo,
    selfIntroduction,
    educationExperience,
    workExperience,
    techStack,
    resumeDownloadLink,
    projectExperience,
    title
}