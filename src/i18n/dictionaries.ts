import type { Dictionary } from './types'

const projectMedia = {
  omachi: {
    cover: '/img/projects/project-1/cover.jpg',
    gallery: [
      '/img/projects/project-1/cover.jpg',
      '/img/projects/project-1/1.jpg',
      '/img/projects/project-1/2.jpg',
    ],
  },
  facebook: {
    cover: '/img/projects/project-2/cover.jpg',
    gallery: [
      '/img/projects/project-2/cover.jpg',
      '/img/projects/project-2/1.jpg',
      '/img/projects/project-2/2.jpg',
      '/img/projects/project-2/3.jpg',
    ],
  },
  ewom: {
    cover: '/img/projects/project-3/cover.jpg',
    gallery: [
      '/img/projects/project-3/cover.jpg',
      '/img/projects/project-3/1.jpg',
      '/img/projects/project-3/2.jpg',
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
      experienceLabel: '/KINH NGHIỆM',
      headline:
        'Xin chào, mình là Nguyễn Thị Diệu Hiền —\nsinh viên năm cuối ngành Marketing tại Trường Đại học Công Thương TP.HCM.',
      body: 'Đã có kinh nghiệm thực tập Content Marketing và sản xuất nội dung trên TikTok: lên ý tưởng, xây dựng kịch bản, quay dựng và biên tập video. Đồng thời có tư duy nghiên cứu qua đề tài khoa học. Mong muốn phát triển trong môi trường chuyên nghiệp, không ngừng học hỏi và đóng góp vào các hoạt động Marketing của doanh nghiệp.',
      experiences: [
        {
          period: '08/2025 – 02/2026',
          org: 'Công ty Cổ phần VIDOCO',
          role: 'Thực tập sinh Content Marketing',
          bullets: [
            'Lên ý tưởng và xây dựng kịch bản nội dung TikTok.',
            'Quay dựng, biên tập video ngắn phục vụ truyền thông.',
            'Tham gia review sản phẩm và xây dựng hình ảnh thương hiệu.',
            'Hỗ trợ team Media trong quá trình setup và sản xuất nội dung.',
          ],
        },
        {
          period: '02/2025',
          org: 'Trường Đại học Công Thương TP. Hồ Chí Minh',
          role: 'Quay quảng cáo phục vụ môn học',
          bullets: [
            'Lên ý tưởng, tổ chức sản xuất và quay video quảng cáo cho sản phẩm, đảm bảo nội dung sáng tạo, thu hút và phù hợp với chiến lược thương hiệu.',
          ],
        },
        {
          period: '2024 – 2025',
          org: 'YBOX',
          role: 'CTV Marketing',
          bullets: [
            'Lên ý tưởng và biên soạn nội dung trên các nền tảng theo định hướng và yêu cầu của đội ngũ Marketing.',
          ],
        },
      ],
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
          'Xây dựng kế hoạch Marketing cho chiến dịch “Omachi Ươm Mầm”: mỗi ly mì kèm một gói mầm làm từ bã mía tự phân hủy, thân thiện với môi trường. Người dùng có thể trồng mầm ngay trong ly và tham gia đổi quà — kết hợp trải nghiệm sản phẩm với thông điệp xanh nhằm tăng nhận diện thương hiệu và thúc đẩy doanh số.',
        challenge:
          'Nghiên cứu thị trường FMCG và hành vi người tiêu dùng quan tâm sản phẩm xanh. Xây dựng ý tưởng chiến dịch xoay quanh cơ chế “mỗi ly một gói mầm – trồng trong ly và đổi quà”. Lập kế hoạch truyền thông, mục tiêu, ngân sách và tiến độ triển khai.',
        solution:
          'Lập kế hoạch Marketing. Nghiên cứu và phân tích thị trường. Xây dựng kế hoạch truyền thông gắn trải nghiệm sản phẩm. Lập mục tiêu, ngân sách và timeline chiến dịch.',
        ...projectMedia.omachi,
      },
      {
        id: 'facebook-launch',
        title: 'Ra mắt thương hiệu HMedia trên Facebook',
        category: 'Social Content',
        year: '2024',
        industry: 'Sự kiện & Thương hiệu',
        tool: 'Facebook',
        client: 'HMedia',
        summary:
          'Xây dựng chiến dịch ra mắt thương hiệu HMedia trên Facebook: từ nhận diện thương hiệu, nội dung truyền thông đến tổ chức sự kiện launch, nhằm giới thiệu thương hiệu/sản phẩm và thu hút cộng đồng người theo dõi ngay từ giai đoạn đầu.',
        challenge:
          'Xây dựng và vận hành fanpage Facebook của HMedia. Thiết kế logo cùng hệ thống hình ảnh nhận diện. Lên ý tưởng, viết kịch bản và sản xuất nội dung truyền thông. Tham gia làm diễn viên/mẫu ảnh trong các ấn phẩm. Phối hợp tổ chức sự kiện ra mắt thương hiệu.',
        solution:
          'Xây dựng nhận diện thương hiệu. Quản lý nội dung Facebook. Thiết kế hình ảnh cơ bản. Lên kịch bản và sản xuất content. Làm việc nhóm và tổ chức sự kiện.',
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
          'Thực hiện đề tài nghiên cứu khoa học về tác động của truyền miệng điện tử (eWOM) đến nhận diện thương hiệu xe công nghệ xanh SM đối với Gen Z tại TP. Hồ Chí Minh. Nghiên cứu làm rõ mối quan hệ giữa các yếu tố eWOM và brand awareness, từ đó đề xuất định hướng Marketing dựa trên dữ liệu. Đề tài được đăng trên Tạp chí Công Thương.',
        challenge:
          'Xác định vấn đề nghiên cứu, tổng quan lý thuyết và xây dựng mô hình nghiên cứu. Thiết kế bảng khảo sát, thu thập dữ liệu từ đối tượng Gen Z tại TP.HCM. Làm sạch, xử lý và phân tích dữ liệu bằng SPSS (thống kê mô tả, kiểm định độ tin cậy, phân tích nhân tố, kiểm định giả thuyết). Diễn giải kết quả và đề xuất giải pháp Marketing ứng dụng cho thương hiệu xe xanh SM. Hoàn thiện báo cáo và hỗ trợ quy trình xuất bản trên Tạp chí Công Thương.',
        solution:
          'Nghiên cứu thị trường và hành vi người tiêu dùng. Thiết kế khảo sát và thu thập dữ liệu. Phân tích định lượng bằng SPSS. Tư duy phản biện, phân tích và giải quyết vấn đề. Viết báo cáo khoa học / học thuật. Đề xuất giải pháp Marketing dựa trên insight. Làm việc nhóm và quản lý tiến độ nghiên cứu.',
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
      experienceLabel: '/EXPERIENCE',
      headline:
        'Hi, I’m Nguyen Thi Dieu Hien —\na final-year Marketing student at Ho Chi Minh City University of Industry and Trade.',
      body: 'I have internship experience in Content Marketing and TikTok content production — from ideation and scripting to shooting and editing. Academic research has also shaped my analytical mindset. I’m eager to grow in a professional environment, keep learning, and contribute to a company’s Marketing work.',
      experiences: [
        {
          period: '08/2025 – 02/2026',
          org: 'VIDOCO Joint Stock Company',
          role: 'Content Marketing Intern',
          bullets: [
            'Ideated and scripted TikTok content.',
            'Shot and edited short-form videos for communications.',
            'Contributed to product reviews and brand imagery.',
            'Supported the Media team with setup and content production.',
          ],
        },
        {
          period: '02/2025',
          org: 'Ho Chi Minh City University of Industry and Trade',
          role: 'Advertising shoot for coursework',
          bullets: [
            'Ideated, organized production, and shot an advertising video — creative, engaging, and aligned with brand strategy.',
          ],
        },
        {
          period: '2024 – 2025',
          org: 'YBOX',
          role: 'Marketing Collaborator',
          bullets: [
            'Ideated and wrote content across platforms based on the Marketing team’s direction and briefs.',
          ],
        },
      ],
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
          'Built a marketing plan for the “Omachi Sprouting” campaign: each noodle cup includes a sprout kit made from biodegradable sugarcane bagasse. Consumers can grow the sprouts in the cup and redeem them for rewards — turning an eco-friendly product experience into a brand engagement loop that drives awareness and sales.',
        challenge:
          'Researched the FMCG market and eco-conscious consumer behavior. Developed the campaign concept around “one cup, one sprout kit — grow in-cup and redeem rewards.” Built the communications plan, objectives, budget, and rollout timeline.',
        solution:
          'Marketing planning. Market research and analysis. Communications planning tied to the product experience. Goal-setting, budgeting, and campaign timeline.',
        ...projectMedia.omachi,
      },
      {
        id: 'facebook-launch',
        title: 'HMedia Brand Launch on Facebook',
        category: 'Social Content',
        year: '2024',
        industry: 'Event & Branding',
        tool: 'Facebook',
        client: 'HMedia',
        summary:
          'Led the HMedia brand launch on Facebook — from visual identity and content communications to the launch event — to introduce the brand/product and grow an early community of followers.',
        challenge:
          'Built and managed the HMedia Facebook page. Designed the logo and brand visual system. Ideated, scripted, and produced campaign content. Appeared as talent/model in key assets. Collaborated on organizing the brand launch event.',
        solution:
          'Brand identity building. Facebook content management. Basic visual design. Scripting and content production. Teamwork and event organization.',
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
          'Conducted an academic research project on how electronic word-of-mouth (eWOM) influences brand awareness of SM green mobility among Gen Z in Ho Chi Minh City. The study examined the relationship between eWOM factors and brand recognition, then proposed data-driven Marketing directions. The paper was published in Industry and Trade Review.',
        challenge:
          'Defined the research problem, reviewed literature, and built the research model. Designed the survey and collected responses from Gen Z in Ho Chi Minh City. Cleaned, processed, and analyzed data with SPSS (descriptive statistics, reliability testing, factor analysis, hypothesis testing). Interpreted findings and proposed actionable Marketing recommendations for the SM green mobility brand. Finalized the research paper and supported the publication process with Industry and Trade Review.',
        solution:
          'Market and consumer behavior research. Survey design and data collection. Quantitative analysis with SPSS. Critical thinking, analysis, and problem-solving. Academic / research writing. Data-driven Marketing recommendations. Teamwork and research project management.',
        ...projectMedia.ewom,
      },
    ],
  },
}
