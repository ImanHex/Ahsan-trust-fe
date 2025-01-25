import { RiTShirt2Fill } from "react-icons/ri";
import { LuNewspaper } from "react-icons/lu";
import unavailable from "@assets/unavailable.png"

export const unavailableImg = unavailable

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Register",
    hash: "/register",
  },
  {
    name: "Product",
    hash:"/all-products"
  },
  {
    name: "Activities",
    hash:"/activity"
  }
  ,
  {
    name: "News",
    hash:"/all-news"
  },
  {
    name: "Store",
    hash:"/all-store"
  },
  {
    name: "About Us",
    hash: "/aboutus",
  },
] as const;

export const menu = [
  {
    name: "Register",
    hash: "/register",
  },
  {
    name: "Store",
    hash:"/all-products"
  }
] as const;

export const partnership = [
  {
    url: "https://www.oap.go.th/wp-content/uploads/2024/01/Artwork_Logo_MHESI_final_27_04_2564_-01.png",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEk8tkGvrxSe-s_vNasCNAiFFyow5qOsvkg&s",
  },
  {
    url: "https://research.buu.ac.th/web2019/wp-content/uploads/2023/03/22223-8.png",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/th/9/95/Ftu_logo.png",
  },
];

export const categoryFilters = [
  {
    categoryName: "Products",
    icon: RiTShirt2Fill,
  },
  {
    categoryName: "News",
    icon: LuNewspaper,
  },
  // {
  //   categoryName: "Other Stuff",
  //   icon: FaEllipsisH,
  // },
] as const;

export const faqList = [
  {
    question: "Is there a registration fee?",
    answer: "No, the event is free for all participants.",
  },
  {
    question: "What documents need to be prepared?",
    answer: "On the first day, bring a copy of your ID card with a certified true copy signature, one copy per person.",
  },
  {
    question: "Where is the class held?",
    answer: "At the AHSAN Trustmark Innovation Center for Career Development for Students and Communities, Fatoni University.",
  },
];


export const ahsan = [
  {
    letter: 'A',
    title: 'Authenticity',
    description: 'The products have a clear origin, are produced in accordance with Islamic principles, and are environmentally responsible.'
  },
  {
    letter: 'H',
    title: 'Humanity',
    description: 'The products are made without the use of unfair labor practices, ensuring the rights and welfare of the producers are protected and respecting the consumers.'
  },
  {
    letter: 'S',
    title: 'Standard',
    description: 'The products have passed quality tests, ensuring safety and effectiveness.'
  },
  {
    letter: 'A',
    title: 'Accredited',
    description: 'The products have been inspected and certified by the AHSAN Trustmark Quality Assurance Committee.'
  },
  {
    letter: 'N',
    title: 'Network',
    description: 'The products are part of a business network that supports sustainable trade and fair pricing.'
  }
];

export const AhsanOrganization = [
  {
    name: "Assoc.Prof.Dr. Ismail Lutfi Japakiya", 
    position: "The Chairman of the Advisory Committee",
    image: "images/ismail.jpeg"
  },
  {
    name: "ASST.PROF.DR.Abdullah Uma",
    position: "The Vice Chairman of the Advisory Committee",
    image: "images/Abdullah.jpg"
  },
  {
    name: "Asst.Prof.Dr.Mahsoom Sateemae ",
    position: "Chairman",
    image: "images/Mahsoom.jpg"
  },
  {
    name: " Dr.Muhammad Ameen Chenu ",
    position: "Chairman",
    image: "images/Ameen.jpg"
  },
  {
    name: "Asst.Prof.Dr. Abdulkarim Samaeng ",
    position: "Vice President, Business Administration(Jama’ah Venture)",
    image: "images/Abdulkarim.jpg"
  },
  {
    name: "Mr.Abdulfattah Japakiya ",
    position: "Vice President, Public Relations",
    image: "images/Abdulfattah.jpg"
  },
  {
    name: "Asst.Prof.Dr. Muhammad Samaroh ",
    position: "Vice President, Sharia and International Affairs",
    image: "images/Muhammad.jpg"
  },
  {
    name: " Dr.Ilham Chenu ",
    position: "Secratary and The Policy Oversight Committee ",
    image: "images/Ilham.jpg"
  },
  {
    name: "Dr.Rusnat Noipom",
    position: "Inspection and Evaluation Committee",
    image: "images/Rusnat.png"
  },
  {
    name: "Asst.Prof.Dr. Ruhana Samaeng ",
    position: "Public Relations Committee",
    image: "images/Ruhana.jpg"
  },
  {
    name: "Mrs.Sukanya Malawaichan",
    position: "Director of Ahsan Trustmark Innovation Center",
    image: "images/Sukanya.png"
  },
  {
    name: "MR.Zulkornai Benya",
    position: "Information Governance Committee",
    image: "images/Zulkornai.png"
  }
]

export const criteriaSteps = [
  {
    label: "ภูมิปัญญาและวัฒนธรรมท้องถิ่น",
    key: "local Wisdom And Culture",
    subCriteria: [
      {
        label:
          "ใช้กระบวนการฮาลาเกาะฮ์เป็นตัวขับเคลื่อน (อย่างน้อยไตรมาสละ1ครั้ง)",
        key: "ใช้กระบวนการฮาลาเกาะฮ์เป็นตัวขับเคลื่อน (อย่างน้อยไตรมาสละ1ครั้ง)",
      },
      {
        label:
          "หากเป็นศาสนิกอื่นๆที่ไม่ใช่มุสลิม ต้องผ่านกระบวนการฮาลาเกาะฮฺของศูนย์นวัตกรรมอะห์ซานอย่างน้อย2ครั้ง/ปี",
        key: "หากเป็นศาสนิกอื่นๆที่ไม่ใช่มุสลิม ต้องผ่านกระบวนการฮาลาเกาะฮฺของศูนย์นวัตกรรมอะห์ซานอย่างน้อย2ครั้ง/ปี",
      },
      {
        label:
          "ใช้วัสดุท้องถิ่นอย่างน้อย 1 อย่าง หรือแรงงานท้องถิ่น 40% ของแรงงานทั้งหมด",
        key: "ใช้วัสดุท้องถิ่นอย่างน้อย 1 อย่าง หรือแรงงานท้องถิ่น 40% ของแรงงานทั้งหมด",
      },
      {
        label: "ภูมิปัญญาท้องถิ่นที่มีระยะเวลาอย่างน้อย60ปี",
        key: "ภูมิปัญญาท้องถิ่นที่มีระยะเวลาอย่างน้อย60ปี",
      },
      {
        label:
          "สินค้าประเภทเครื่องใช้: มีกระบวนการผลิตไม่ขัดกับศาสนาอิสลาม หรือต้องได้รับตราฮาลาลจากกรรมการอิสลามประจำจังหวัด หรือสถาบันทางศาสนาอิสลามอื่นๆที่น่าเชื่อถือและยังอยู่ในอายุการใช้งาน",
        key: "สินค้าประเภทเครื่องใช้: มีกระบวนการผลิตไม่ขัดกับศาสนาอิสลาม หรือต้องได้รับตราฮาลาลจากกรรมการอิสลามประจำจังหวัด หรือสถาบันทางศาสนาอิสลามอื่นๆที่น่าเชื่อถือและยังอยู่ในอายุการใช้งาน",
      },
      {
        label:
          "สินค้าประเภทอาหาร: มีกระบวนการผลิตไม่ขัดกับศาสนาอิสลาม หรือต้องได้รับตราฮาลาลจากกรรมการอิสลามประจำจังหวัด",
        key: "สินค้าประเภทอาหาร: มีกระบวนการผลิตไม่ขัดกับศาสนาอิสลาม หรือต้องได้รับตราฮาลาลจากกรรมการอิสลามประจำจังหวัด",
      },
    ],
  },
  {
    label: "Local Labor",
    key: "local Labor",
    subCriteria: [
      {
        label:
          "รายได้น้อยกว่า 50000 ต่อปี เกิดการจ้างงานเพิ่ม 1 ถึง 2 ครัวเรือน",
        key: "รายได้น้อยกว่า 50000 ต่อปี เกิดการจ้างงานเพิ่ม 1 ถึง 2 ครัวเรือน",
      },
      {
        label: "รายได้ 50000-500000 ต่อปี เกิดการจ้างงานเพิ่ม 3 -9ครัวเรือน",
        key: "รายได้ 50000-500000 ต่อปี เกิดการจ้างงานเพิ่ม 3 -9ครัวเรือน",
      },
      {
        label:
          "รายได้มากกว่า 500,000  ถึง 1,000,000 ต่อปี เกิดการจ้างงานเพิ่ม 10 -19 ครัวเรือน",
        key: "รายได้มากกว่า 500,000  ถึง 1,000,000 ต่อปี เกิดการจ้างงานเพิ่ม 10 -19 ครัวเรือน",
      },
      {
        label:
          "รายได้มากกว่า 1,000,000  ถึง 3,000,000 ต่อปี เกิดการจ้างงานเพิ่มไม่น้อยกว่า 20 ครัวเรือน",
        key: "รายได้มากกว่า 1,000,000  ถึง 3,000,000 ต่อปี เกิดการจ้างงานเพิ่มไม่น้อยกว่า 20 ครัวเรือน",
      },
      {
        label:
          "รายได้มากกว่า  3,000,000  ถึง 5,000,000 ต่อปี เกิดการจ้างงานเพิ่มมากกว่า 20 ถึง 50 ครัวเรือน",
        key: "รายได้มากกว่า  3,000,000  ถึง 5,000,000 ต่อปี เกิดการจ้างงานเพิ่มมากกว่า 20 ถึง 50 ครัวเรือน",
      },
      {
        label:
          "ครัวเรือนรายได้มากกว่า 5,000,000  ถึง 7,000,000 ต่อปี เกิดการจ้างงานเพิ่ม 50 ถึง 80 ครัวเรือน",
        key: "ครัวเรือนรายได้มากกว่า 5,000,000  ถึง 7,000,000 ต่อปี เกิดการจ้างงานเพิ่ม 50 ถึง 80 ครัวเรือน",
      },
      {
        label:
          "รายได้มากกว่า  7,000,000  ต่อปี เกิดการจ้างงานเพิ่มไม่น้อยกว่า 80 ครัวเรือน",
        key: "รายได้มากกว่า  7,000,000  ต่อปี เกิดการจ้างงานเพิ่มไม่น้อยกว่า 80 ครัวเรือน",
      },
    ],
  },
  {
    label: "Local Labor",
    key: "local Labor",
    subCriteria: [
      {
        label: "ใช้วัตถุดิบที่ปลูกหรือผลิตหรือขายในพื้นที่ไม่น้อยกว่า 40%",
        key: "ใช้วัตถุดิบที่ปลูกหรือผลิตหรือขายในพื้นที่ไม่น้อยกว่า 40%",
      },
      {
        label: "ใช้วัตถุดิบที่มีต้นกำเนิดในพื้นที่ 50%",
        key: "ใช้วัตถุดิบที่มีต้นกำเนิดในพื้นที่ 50%",
      },
    ],
  },
  {
    label: "Local Economy",
    key: "Local Economy",
    subCriteria: [
      {
        label: "รายได้ที่เพิ่มขึ้นของคนในท้องถิ่นเพิ่มขึ้น ร้อยละ5%",
        key: "รายได้ที่เพิ่มขึ้นของคนในท้องถิ่นเพิ่มขึ้น ร้อยละ5%",
      },
      {
        label: "มูลค่าเศรษฐกิจในพื้นที่เพิ่มขึ้น 5 %",
        key: "มูลค่าเศรษฐกิจในพื้นที่เพิ่มขึ้น 5 %",
      },
    
      {
        label: "การผลิตในแต่ละปี เพิ่มขึ้นร้อยละ5%",
        key: "การผลิตในแต่ละปี เพิ่มขึ้นร้อยละ5%",
      },
      {
        label: "นำผลิตภัณฑ์และบริการใหม่ออกสู่ตลาด",
        key: "นำผลิตภัณฑ์และบริการใหม่ออกสู่ตลาด",
      },
      {
        label: "ปรับปรุงคุณภาพของผลิตภัณฑ์และบริการ",
        key: "ปรับปรุงคุณภาพของผลิตภัณฑ์และบริการ",
      },
      {
        label: "เกิดการขยายตัวการประกอบการชุมชนธุรกิจในท้องถิ่น 5%",
        key: "เกิดการขยายตัวการประกอบการชุมชนธุรกิจในท้องถิ่น 5%",
      },
    ],
  },
  {
    label: "Local Networking ",
    key: "Local Networking ",
    subCriteria: [
      {
        label:
          "ผู้ประกอบการต้องยินยอมร่วมมือกับ AHSAN Trustmark ในการขับเคลื่อนสนับสนุนผู้ประกอบการท้องถิ่นรายอื่นที่มีขนาดเล็กกว่าไม่ต่ำกว่า 1 ราย",
        key: "ผู้ประกอบการต้องยินยอมร่วมมือกับ AHSAN Trustmark ในการขับเคลื่อนสนับสนุนผู้ประกอบการท้องถิ่นรายอื่นที่มีขนาดเล็กกว่าไม่ต่ำกว่า 1 ราย",
      },
      {
        label:
          "ส่งออกสินค้าและบริการไปยังประเทศอื่นๆเพิ่มขึ้นร้อยละ5 ของการส่งออก/ปี",
        key: "ส่งออกสินค้าและบริการไปยังประเทศอื่นๆเพิ่มขึ้นร้อยละ5 ของการส่งออก/ปี",
      },
      {
        label:
          "มีจำนวนคู่ค้าทางธุรกิจของตลาด ทั้งในและต่างประเทศเพิ่มขึ้นร้อยละ 5",
        key: "มีจำนวนคู่ค้าทางธุรกิจของตลาด ทั้งในและต่างประเทศเพิ่มขึ้นร้อยละ 5",
      },
      {
        label:
          "จำนวนการเข้าร่วมงานแสดงสินค้าในและต่างประเทศเพิ่มขึ้นร้อยละ 5",
        key: "จำนวนการเข้าร่วมงานแสดงสินค้าในและต่างประเทศเพิ่มขึ้นร้อยละ 5",
      },
    ],
  },
  {
    label: "Local Support",
    key: "Local Support",
    subCriteria: [
      {
        label:
          "ยินดีมอบเงินบริจาค/ซะกาต/ซอดาเกาะ ต่อปี ร้อยละ1 ของรายได้รวม เข้าคลังรับบริจาคของสถาบัน AHSAN Trustmark",
        key: "ยินดีมอบเงินบริจาค/ซะกาต/ซอดาเกาะ ต่อปี ร้อยละ1 ของรายได้รวม เข้าคลังรับบริจาคของสถาบัน AHSAN Trustmark ",
      },
      {
        label:
          "ยินดีมอบเงินจากรายได้ขั้นต้นเพื่อสนับสนุนกิจกรรมสาธารณกุศลหรือวากัฟร้อยละ 1 เข้าคลังรับบริจาคของสถาบัน AHSAN Trustmark",
        key: "ยินดีมอบเงินจากรายได้ขั้นต้นเพื่อสนับสนุนกิจกรรมสาธารณกุศลหรือวากัฟร้อยละ 1 เข้าคลังรับบริจาคของสถาบัน AHSAN Trustmark",
      },
    ],
  },
];

