(()=>{
const q=(s)=>document.querySelector(s), qa=(s)=>[...document.querySelectorAll(s)];
const T={
 vi:{
  nav:['Projects','About','Contact'], hello:'Xin chào, mình là', hero:'Biến những vấn đề thực tế thành công cụ số gọn gàng, hữu ích và dễ sử dụng.', scroll:'CUỘN ĐỂ KHỞI ĐỘNG ↓',
  bubbles:['Có vấn đề nào đang tốn thời gian mỗi ngày?','Tìm đúng pain point, làm tool nhỏ, test thật rồi cải thiện.','Ship một bản chạy được trước nhé 👀'], input:'Nhập ý tưởng... ',
  copies:[['Từ vấn đề thật.','Tôi thích bắt đầu từ những việc đang bất tiện, lặp lại hoặc mất thời gian trong công việc hằng ngày.'],['Làm công cụ để dùng thật.','Web tool, automation và các prototype nhỏ — ưu tiên dễ dùng, chạy được và giải quyết đúng việc.'],['Không chỉ viết code.','Tìm lỗi, đọc dữ liệu, test luồng và chỉnh sản phẩm dựa trên cách người dùng thực sự sử dụng.'],['Học qua sản phẩm.','Mỗi project là một lần học thêm về frontend, triển khai, API và cách biến ý tưởng thành thứ có thể sử dụng.']],
  process:['CÁCH TÔI LÀM VIỆC','Từ vấn đề đến sản phẩm.','Không cố làm mọi thứ phức tạp. Tôi thường bắt đầu nhỏ, test sớm và cải thiện từ phản hồi thực tế.'],
  steps:[['01. Understand','Xác định người dùng đang vướng ở đâu, thao tác nào lặp lại và kết quả họ thực sự cần.'],['02. Build & Test','Làm prototype chạy được, kiểm tra luồng chính, dữ liệu và những lỗi phát sinh khi dùng thật.'],['03. Ship & Improve','Đưa sản phẩm lên web, tiếp tục sửa UI/UX và tối ưu dựa trên nhu cầu thực tế.']],
  metrics:['PROJECTS THỰC TẾ','MẢNG TẬP TRUNG','NỀN TẢNG DEPLOY','MỤC TIÊU: GIẢI QUYẾT VẤN ĐỀ'],
  ba:['Từ thao tác thủ công<br>đến một workflow gọn hơn.','Các project của tôi thường bắt đầu từ một việc nhỏ đang gây bất tiện: nhập liệu, tạo nhận xét, báo cáo, trình bày dữ liệu hoặc một trải nghiệm web chưa đủ tốt.'],
  work:['SELECTED WORK / 2026','Things I’ve built.','Một vài project nổi bật: từ website sản phẩm hoàn chỉnh đến các tool nội bộ giúp giảm thao tác thủ công trong công việc.'],
  ttv:'Website game tiên hiệp với landing cinematic, download portal, gallery, CMS/Admin và hệ thống chat realtime. Một project hoàn chỉnh từ giao diện đến vận hành.',
  music:'Music player cá nhân với Orbit View, List View, responsive playback, search, timer và motion UI.',
  suite:'Ba tool cùng phục vụ một workflow công việc, được gom thành một nhóm để thể hiện rõ hệ sinh thái công cụ nội bộ.',
  suiteItems:['Lấy dữ liệu lớp, attendance và tạo nhận xét.','Tạo báo cáo cả khóa từ dữ liệu lớp học.','Chuẩn hóa chương trình, stage và dữ liệu EMS.'],
  about:['Một chút<br>về tôi.',['Hiện tại tôi đang làm gì?','Tôi có kinh nghiệm làm việc trong môi trường giáo dục công nghệ, đồng thời tự xây các web tool phục vụ công việc và các project cá nhân.'],['Tôi đang hướng tới vị trí nào?','Software Implementation / IT Support là hướng tôi muốn phát triển: triển khai, hỗ trợ người dùng, xử lý vấn đề và hiểu cách hệ thống vận hành.'],['Tôi thường dùng công nghệ gì?','HTML/CSS, JavaScript, SQL, Postman, Jira; cùng GitHub, Vercel và các API khi project cần.'],['Portfolio này có gì đặc biệt?','Đây vốn là một motion study. Tôi giữ lại chuyển động ban đầu và biến toàn bộ trải nghiệm thành portfolio cá nhân thay vì dùng một template CV thông thường.']],
  cta:['Có một project, một vấn đề','“cần người cùng giải quyết?”','Tôi luôn sẵn sàng trao đổi về cơ hội công việc và những project thú vị.','CONTACT →'], footer:'Lập trình viên · Giảng viên · Nhà sáng tạo'
 },
 en:{
  nav:['Projects','About','Contact'], hello:"Hi, I'm", hero:'I turn real-world problems into clean, useful and easy-to-use digital tools.', scroll:'SCROLL TO INITIALIZE ↓',
  bubbles:['What is taking up too much time every day?','Find the real pain point, build a small tool, test it in practice, then improve it.','Ship a working version first 👀'], input:'Type an idea... ',
  copies:[['Start with a real problem.','I like to begin with tasks that are repetitive, inconvenient or unnecessarily time-consuming.'],['Build something people can use.','Web tools, automation and small prototypes — focused on usability, reliability and solving the right problem.'],['More than writing code.','Debugging, reading data, testing flows and improving products around how people actually use them.'],['Learn by building.','Every project is a chance to learn more about frontend, deployment, APIs and turning ideas into usable products.']],
  process:['HOW I WORK','From problem to product.','I keep things practical: start small, test early and improve with real feedback.'],
  steps:[['01. Understand','Identify where users get stuck, what repeats, and what outcome they actually need.'],['02. Build & Test','Create a working prototype and test the core flow, data and real-world edge cases.'],['03. Ship & Improve','Deploy it, refine the UI/UX and keep improving based on actual needs.']],
  metrics:['REAL PROJECTS','FOCUS AREAS','DEPLOY PLATFORMS','ONE GOAL: SOLVE THE PROBLEM'],
  ba:['From manual work<br>to a cleaner workflow.','My projects often start with a small friction point: data entry, comments, reports, presenting information or a web experience that can be improved.'],
  work:['SELECTED WORK / 2026',"Things I’ve built.",'A selection of work ranging from complete product websites to internal tools that reduce repetitive work.'],
  ttv:'A xianxia game platform with a cinematic landing page, download portal, gallery, CMS/Admin and realtime chat — built as a complete product ecosystem.',
  music:'A personal music player with Orbit View, List View, responsive playback, search, timer and motion-driven UI.',
  suite:'Three tools supporting the same workplace workflow, grouped together as one compact internal tool ecosystem.',
  suiteItems:['Pull class data and attendance, then generate student comments.','Generate course-wide student reports from class data.','Normalize curriculum, stage and EMS data mapping.'],
  about:['A little<br>about me.',['What am I doing now?','I have experience in technology education and build web tools for real work alongside personal projects.'],['What role am I moving toward?','Software Implementation / IT Support: deployment, user support, problem solving and understanding how systems operate in practice.'],['What do I work with?','HTML/CSS, JavaScript, SQL, Postman and Jira, plus GitHub, Vercel and APIs when a project needs them.'],['What is different about this portfolio?','It began as a motion study. I kept the original motion concept and turned the experience into a personal portfolio instead of a conventional CV template.']],
  cta:['Have a project or a problem','“worth solving together?”',"I'm open to discussing job opportunities and interesting projects.",'CONTACT →'], footer:'Developer · Educator · Creator'
 }};
function set(lang){const t=T[lang]; document.documentElement.lang=lang==='vi'?'vi':'en'; localStorage.setItem('portfolioLang',lang);
 qa('.topbar nav a').forEach((e,i)=>e.textContent=t.nav[i]); q('.hello').textContent=t.hello; q('.hero-content p').textContent=t.hero; q('.hero-cta').textContent=t.scroll;
 qa('.bubble').forEach((e,i)=>e.textContent=t.bubbles[i]); q('.chat .input').childNodes[0].nodeValue=t.input;
 qa('.copy').forEach((e,i)=>{e.querySelector('h3').textContent=t.copies[i][0];e.querySelector('p').textContent=t.copies[i][1]});
 const sh=q('.how .section-head'); sh.querySelector('span').textContent=t.process[0];sh.querySelector('h2').textContent=t.process[1];sh.querySelector('p').textContent=t.process[2];
 qa('.step').forEach((e,i)=>{e.querySelector('h3').textContent=t.steps[i][0];e.querySelector('p').textContent=t.steps[i][1]}); qa('.metric span').forEach((e,i)=>e.textContent=t.metrics[i]);
 q('.ba-copy h2').innerHTML=t.ba[0];q('.ba-copy p').textContent=t.ba[1]; const ph=q('.project-head');ph.querySelector('span').textContent=t.work[0];ph.querySelector('h2').textContent=t.work[1];ph.querySelector('p').textContent=t.work[2];
 qa('.project-info p')[0].textContent=t.ttv;qa('.project-info p')[1].textContent=t.music;q('.suite-head p').textContent=t.suite;qa('.suite-item span').forEach((e,i)=>e.textContent=t.suiteItems[i]);
 q('.faq-left h2').innerHTML=t.about[0];qa('.faq-item').forEach((e,i)=>{const b=e.querySelector('button'), icon=b.querySelector('i'); b.childNodes[0].nodeValue=t.about[i+1][0];e.querySelector('p').textContent=t.about[i+1][1]});
 const c=q('.cta-inner');c.querySelector('h2 span').textContent=t.cta[0];c.querySelector('h2 em').textContent=t.cta[1];c.querySelector('p').textContent=t.cta[2];c.querySelector('button').textContent=t.cta[3];q('.clean-footer span').textContent=t.footer;
 q('.lang-switch').textContent=lang.toUpperCase();}
q('.lang-switch').addEventListener('click',()=>set((document.documentElement.lang==='vi')?'en':'vi')); set(localStorage.getItem('portfolioLang')||'vi');
})();
