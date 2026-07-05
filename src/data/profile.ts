export type FocusGroup = {
  title: string;
  items: string[];
};

export type EducationRecord = {
  period: string;
  school: string;
  program: string;
  gpa: string;
  description: string;
};

export type PracticeRecord = {
  title: string;
  period: string;
  role: string;
  observation: string;
  method: string;
  reflection: string;
};

export const profile = {
  name: "李佳瑶",
  role: "动物医学专业学生",
  tagLine: "Animal Medicine Student / Clinical Observation / Life Care",
  heroText: "以严谨的学习、细致的观察和对生命的尊重，走近动物医学。",
  heroSubtext:
    "Currently studying animal medicine, clinical diagnosis and laboratory examination.",
  photo: {
    src: "/lijiayao-photo.jpg",
    alt: "李佳瑶个人照片",
  },
  email: "2959802830@qq.com",
  about:
    "我是广东科贸职业学院动物医学专业学生。学习中，我系统接触动物解剖生理学、动物病理学、动物药理学、兽医临床诊断学、宠物疾病诊治、动物微生物免疫学等课程，也持续把课堂知识放回真实的观察与操作中理解。我重视扎实的理论基础，也重视每一次实践训练中的细节记录。动物疾病诊断、临床检查和实验室检查是我持续关注的方向；认真、细致、主动学习和对结果负责，是我希望一直保持的专业习惯。",
  education: {
    period: "2024.09 - 2027.06",
    school: "广东科贸职业学院",
    program: "动物医学 / 专科",
    gpa: "3.78",
    description:
      "系统学习动物医学核心课程，建立动物疾病诊断、治疗与护理相关的理论基础。",
  } satisfies EducationRecord,
  focusGroups: [
    {
      title: "临床诊疗技术",
      items: [
        "掌握动物接近与保定技术",
        "熟悉问诊、触诊、视诊等基本临床检查方法",
        "能够进行整体状态、被毛皮肤、体温、脉搏、呼吸数、眼结膜等一般检查",
      ],
    },
    {
      title: "实验室检查技术",
      items: [
        "掌握血液采集与抗凝技术",
        "熟悉血常规检查流程",
        "了解血液生化检查、尿液检查及相关临床分析方法",
      ],
    },
    {
      title: "特殊诊断技术",
      items: ["了解 X 线检查原理", "了解 B 超检查原理"],
    },
    {
      title: "治疗技术",
      items: [
        "掌握经口给药技术",
        "掌握注射技术，包括静脉注射、肌肉注射、皮下注射等",
        "了解免疫接种和常见穿刺技术",
      ],
    },
  ] satisfies FocusGroup[],
  practice: {
    title: "鸡胚发育生物学观察实验",
    period: "2025.04 - 2025.05",
    role: "观察员",
    observation:
      "观察鸡蛋在 21 天孵化周期内胚胎发育过程，记录环境调控、胚胎变化与破壳过程。",
    method:
      "通过人工模拟母鸡孵蛋环境，保持稳定观察节奏，并以实验记录方式整理阶段变化。",
    reflection:
      "这段实践训练了我对生命发育过程的观察能力、实验记录能力和科学分析意识。",
  } satisfies PracticeRecord,
  certificates: ["大学英语四级 CET-4", "救护员证", "驾驶证"],
  statement:
    "我相信扎实的理论基础，是进入动物医学实践的第一步。在学习过程中，我始终重视每一次课堂、实验和观察，把专业知识转化为可被理解、判断和运用的能力。未来，我希望继续在动物临床诊疗与疾病防治方向积累经验，以更科学、耐心和负责的方式服务动物健康。",
  closing:
    "If you are interested in animal care, clinical learning or quiet observation of life, feel free to contact me.",
} as const;
