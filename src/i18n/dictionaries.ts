import type { Dictionary } from './types'

const projectMedia = {
  omachi: {
    cover: '/img/projects/project-1/cover.webp',
    gallery: [
      '/img/projects/project-1/cover.webp',
      '/img/projects/project-1/1.webp',
      '/img/projects/project-1/2.webp',
      '/img/projects/project-1/3.webp',
    ],
  },
  facebook: {
    cover: '/img/projects/project-2/cover.webp',
    gallery: [
      '/img/projects/project-2/cover.webp',
      '/img/projects/project-2/1.webp',
      '/img/projects/project-2/2.webp',
      '/img/projects/project-2/3.webp',
    ],
  },
  ewom: {
    cover: '/img/projects/project-3/cover.webp',
    gallery: [
      '/img/projects/project-3/cover.webp',
      '/img/projects/project-3/1.webp',
      '/img/projects/project-3/2.webp',
    ],
  },
}

export const dictionaries: Record<'vi' | 'en', Dictionary> = {
  vi: {
    hero: {
      line1: 'SÁNG TẠO NỘI DUNG',
      line2: '& CHIẾN LƯỢC MARKETING',
      scroll: 'Cuộn xuống',
    },
    about: {
      label: '/GIỚI THIỆU',
      headline:
        'Xin chào, mình là Nguyễn Thị Diệu Hiền —\nsinh viên năm cuối ngành Marketing tại Trường Đại học Công Thương TP.HCM.',
      body: 'Mình có kinh nghiệm thực tập trong lĩnh vực Content Marketing, đặc biệt với nền tảng TikTok, từ lên ý tưởng, viết kịch bản đến quay dựng và biên tập video. Bên cạnh đó, mình từng tham gia nghiên cứu khoa học, giúp rèn luyện tư duy phân tích và nghiên cứu. Mình mong muốn được học hỏi, phát triển chuyên môn và tạo ra những giá trị tích cực thông qua các hoạt động Marketing.',
    },
    projects: {
      label: '/DỰ ÁN TIÊU BIỂU',
      intro:
        'Các dự án dưới đây là những sản phẩm và trải nghiệm tiêu biểu trong quá trình học tập, nghiên cứu và thực tập. Mỗi dự án phản ánh khả năng nghiên cứu, lên ý tưởng, xây dựng nội dung, sản xuất video và phối hợp triển khai các hoạt động Marketing.',
      view: 'XEM DỰ ÁN',
    },
    projectModal: {
      close: 'ĐÓNG',
      more: 'XEM THÊM',
      client: 'ĐỐI TÁC',
      year: 'NĂM',
      industry: 'LĨNH VỰC',
      tool: 'CÔNG CỤ',
      details: '/CHI TIẾT',
      workDone: 'NHỮNG VIỆC ĐÃ LÀM',
      skills: 'KỸ NĂNG ĐẠT ĐƯỢC',
      gallery: '/Hình ảnh',
    },
    stats: {
      label: '/THÀNH TÍCH',
      headline: 'HỌC HỎI – THỰC CHIẾN – TẠO GIÁ TRỊ QUA MARKETING.',
      items: [
        { value: '03', label: 'Dự án tiêu biểu' },
        { value: '02', label: 'Giải thưởng' },
        { value: '3.18', label: 'GPA / 4.0' },
      ],
    },
    cta: {
      title: 'CẢM ƠN ĐÃ XEM',
      copy: 'Em rất mong có cơ hội được trao đổi trực tiếp để chia sẻ thêm về các dự án, kinh nghiệm và sự phù hợp với vị trí ứng tuyển.',
      projects: 'XEM DỰ ÁN',
      about: 'GIỚI THIỆU',
      contact: 'LIÊN HỆ',
    },
    clients: {
      titleLine1: 'Kinh nghiệm',
      titleLine2: '& Đối tác',
    },
    footer: {
      talk: 'Liên hệ',
      address: 'ĐỊA CHỈ',
      phone: 'ĐIỆN THOẠI',
      email: 'EMAIL',
      addressValue: 'Quận 12\nTP. Hồ Chí Minh',
    },
    partners: [
      'YBOX',
      'VIDOCO',
      'HUIT',
      'OMACHI',
      'TẠP CHÍ CÔNG THƯƠNG',
      'ĐẠI HỌC CÔNG THƯƠNG TP.HCM',
    ],
    projectsList: [
      {
        id: 'omachi',
        title: 'Omachi Ươm Mầm',
        category: 'Kế hoạch Marketing',
        year: '2024',
        industry: 'FMCG',
        tool: 'Marketing Plan',
        client: 'Omachi',
        summary:
          'Xây dựng kế hoạch Marketing cho chiến dịch “Omachi Ươm Mầm” nhằm tăng nhận diện thương hiệu và thúc đẩy doanh số thông qua hoạt động truyền thông gắn với thông điệp bảo vệ môi trường.',
        challenge:
          'Nghiên cứu thị trường và khách hàng mục tiêu. Xây dựng ý tưởng và kế hoạch truyền thông. Lập mục tiêu, ngân sách và tiến độ triển khai chiến dịch.',
        solution:
          'Lập kế hoạch Marketing. Nghiên cứu và phân tích thị trường. Xây dựng kế hoạch truyền thông. Lập mục tiêu và ngân sách.',
        ...projectMedia.omachi,
      },
      {
        id: 'facebook-launch',
        title: 'Ra mắt thương hiệu trên Facebook',
        category: 'Social Content',
        year: '2024',
        industry: 'Sự kiện & Thương hiệu',
        tool: 'Facebook',
        client: 'Dự án học thuật',
        summary:
          'Tổ chức sự kiện ra mắt cho một thương hiệu và sản phẩm giả định, xây dựng kế hoạch truyền thông trên nền tảng Facebook nhằm quảng bá sản phẩm và thu hút người tham gia.',
        challenge:
          'Xây dựng và quản lý trang Facebook của dự án. Thiết kế logo và hình ảnh nhận diện thương hiệu. Lên ý tưởng, viết kịch bản và sản xuất nội dung. Tham gia làm diễn viên, mẫu ảnh trong các ấn phẩm truyền thông.',
        solution:
          'Xây dựng thương hiệu. Quản lý nội dung trên Facebook. Thiết kế hình ảnh cơ bản. Lên kịch bản và sản xuất nội dung. Làm việc nhóm và tổ chức sự kiện.',
        ...projectMedia.facebook,
      },
      {
        id: 'ewom-sm',
        title: 'eWOM & thương hiệu xe xanh SM',
        category: 'Nghiên cứu',
        year: '2025',
        industry: 'Giao thông xanh',
        tool: 'SPSS',
        client: 'Tạp chí Công Thương',
        summary:
          'Thực hiện đề tài nghiên cứu khoa học về tác động của truyền miệng điện tử (eWOM) đến nhận diện thương hiệu xe công nghệ xanh SM của thế hệ Gen Z tại TP. Hồ Chí Minh. Đề tài được đăng trên Tạp chí Công Thương.',
        challenge:
          'Xây dựng mô hình và bảng khảo sát nghiên cứu. Thu thập, xử lý và phân tích dữ liệu bằng SPSS. Phân tích kết quả và đề xuất giải pháp Marketing dựa trên dữ liệu.',
        solution:
          'Nghiên cứu thị trường. Phân tích dữ liệu bằng SPSS. Tư duy phân tích và giải quyết vấn đề. Viết báo cáo nghiên cứu. Làm việc nhóm.',
        ...projectMedia.ewom,
      },
    ],
  },
  en: {
    hero: {
      line1: 'CONTENT CREATOR',
      line2: '& MARKETING STRATEGIST',
      scroll: 'Scroll Down',
    },
    about: {
      label: '/WHO AM I',
      headline:
        'Hi, I’m Nguyen Thi Dieu Hien —\na final-year Marketing student at Ho Chi Minh City University of Industry and Trade.',
      body: 'I have internship experience in Content Marketing, especially on TikTok — from ideation and scripting to shooting and video editing. I have also taken part in academic research, which sharpened my analytical and research mindset. I’m eager to keep learning, grow professionally, and create meaningful impact through Marketing.',
    },
    projects: {
      label: '/SELECTED PROJECTS',
      intro:
        'The projects below highlight key work from my studies, research, and internships. Each one reflects my ability to research, ideate, build content, produce video, and collaborate on Marketing initiatives.',
      view: 'VIEW PROJECT',
    },
    projectModal: {
      close: 'CLOSE',
      more: 'LEARN MORE',
      client: 'PARTNER',
      year: 'YEAR',
      industry: 'INDUSTRY',
      tool: 'TOOL',
      details: '/DETAILS',
      workDone: 'WHAT I DID',
      skills: 'SKILLS GAINED',
      gallery: '/Image Gallery',
    },
    stats: {
      label: '/HIGHLIGHTS',
      headline: 'LEARN. PRACTICE. CREATE VALUE THROUGH MARKETING.',
      items: [
        { value: '03', label: 'Featured projects' },
        { value: '02', label: 'Awards' },
        { value: '3.18', label: 'GPA / 4.0' },
      ],
    },
    cta: {
      title: 'THANK YOU',
      copy: 'I’d love the chance to speak with you directly — to share more about my projects, experience, and how I can contribute to the role.',
      projects: 'SEE PROJECTS',
      about: 'ABOUT ME',
      contact: 'CONTACT',
    },
    clients: {
      titleLine1: 'Experience',
      titleLine2: '& Partners',
    },
    footer: {
      talk: 'Let’s Talk',
      address: 'ADDRESS',
      phone: 'PHONE',
      email: 'EMAIL',
      addressValue: 'District 12\nHo Chi Minh City',
    },
    partners: [
      'YBOX',
      'VIDOCO',
      'HUIT',
      'OMACHI',
      'INDUSTRY AND TRADE REVIEW',
      'HUIT UNIVERSITY',
    ],
    projectsList: [
      {
        id: 'omachi',
        title: 'Omachi Sprouting Campaign',
        category: 'Marketing Plan',
        year: '2024',
        industry: 'FMCG',
        tool: 'Marketing Plan',
        client: 'Omachi',
        summary:
          'Built a marketing plan for the “Omachi Sprouting” campaign to increase brand awareness and drive sales through communications tied to an environmental-protection message.',
        challenge:
          'Researched the market and target audience. Developed the campaign idea and communications plan. Set objectives, budget, and implementation timeline.',
        solution:
          'Marketing planning. Market research and analysis. Communications planning. Goal-setting and budgeting.',
        ...projectMedia.omachi,
      },
      {
        id: 'facebook-launch',
        title: 'Brand Launch on Facebook',
        category: 'Social Content',
        year: '2024',
        industry: 'Event & Branding',
        tool: 'Facebook',
        client: 'Academic project',
        summary:
          'Organized a launch event for a fictional brand and product, and built a Facebook communications plan to promote the product and attract attendees.',
        challenge:
          'Built and managed the project Facebook page. Designed the logo and brand visuals. Ideated, scripted, and produced content. Appeared as talent/model in campaign assets.',
        solution:
          'Brand building. Facebook content management. Basic visual design. Scripting and content production. Teamwork and event organization.',
        ...projectMedia.facebook,
      },
      {
        id: 'ewom-sm',
        title: 'eWOM & SM Green Mobility Brand',
        category: 'Research',
        year: '2025',
        industry: 'Green Mobility',
        tool: 'SPSS',
        client: 'Industry and Trade Review',
        summary:
          'Conducted a research project on how electronic word-of-mouth (eWOM) affects brand awareness of SM green mobility among Gen Z in Ho Chi Minh City. The paper was published in Industry and Trade Review.',
        challenge:
          'Built the research model and survey. Collected, processed, and analyzed data with SPSS. Interpreted findings and proposed data-driven Marketing solutions.',
        solution:
          'Market research. SPSS data analysis. Analytical and problem-solving thinking. Research writing. Teamwork.',
        ...projectMedia.ewom,
      },
    ],
  },
}
