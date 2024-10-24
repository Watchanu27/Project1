1. กระบวนการในการสร้างและจัดการโปรเจกต์
ในการสร้างและจัดการโปรเจกต์นี้ ผมได้ใช้ GitHub ซึ่งเป็นเครื่องมือที่นิยมใช้ในการจัดการโค้ดซอร์สและการทำงานร่วมกันในโครงการซอฟต์แวร์ โดยกระบวนการที่ทำมีดังนี้:

การสร้าง Repository: เริ่มต้นด้วยการสร้าง Repository ใหม่ใน GitHub โดยตั้งชื่อว่า "MyFirstProject" และสร้างไฟล์ README.md เพื่ออธิบายวัตถุประสงค์และรายละเอียดเบื้องต้นของโปรเจกต์

การควบคุมเวอร์ชัน: ผมใช้ Git ในการควบคุมเวอร์ชันของโค้ดโดยเริ่มจากการโคลน (clone) Repository ลงมาที่เครื่อง จากนั้นได้เพิ่มโค้ดและใช้คำสั่ง git add และ git commit เพื่อบันทึกการเปลี่ยนแปลง แล้วใช้ git push เพื่ออัปโหลดโค้ดไปยัง GitHub สิ่งนี้ทำให้การจัดการเวอร์ชันของโค้ดเป็นไปอย่างมีระบบและสามารถย้อนกลับไปยังเวอร์ชันก่อนหน้าได้หากเกิดข้อผิดพลาด

2. การทำงานร่วมกันผ่าน Pull Request
เพื่อฝึกการทำงานร่วมกัน ผมได้เชิญเพื่อนให้เข้ามาร่วมในโปรเจกต์ โดยใช้ฟังก์ชัน "Collaborators" ของ GitHub ในการเชิญเพื่อนเข้ามาเป็น Collaborator ซึ่งเพื่อนสามารถแก้ไขโค้ดใน Repository ได้ หลังจากนั้นเพื่อนได้ทำการสร้าง Pull Request เพื่อเสนอการเปลี่ยนแปลงในโค้ดที่ทำขึ้นมา

เมื่อมี Pull Request เข้ามา ผมได้ทำการตรวจสอบโค้ดอย่างละเอียด ก่อนที่จะตัดสินใจ merge การเปลี่ยนแปลงเหล่านั้นเข้ากับโปรเจกต์หลัก สิ่งนี้ช่วยให้สามารถติดตามการเปลี่ยนแปลงในโค้ดได้ง่าย และมั่นใจได้ว่าโค้ดทั้งหมดได้รับการตรวจสอบก่อนนำไปใช้

3. การใช้ GitHub Actions เพื่อการทดสอบและการปรับใช้ระบบอัตโนมัติ
GitHub Actions เป็นฟีเจอร์ที่ช่วยให้สามารถตั้งค่า Workflow อัตโนมัติ เช่น การทดสอบโค้ด หรือการปรับใช้ (deployment) ได้ ผมได้สร้าง Workflow ไฟล์ .yml ภายในโฟลเดอร์ .github/workflows โดยการตั้งค่าให้ระบบทำการทดสอบอัตโนมัติเมื่อมีการสร้าง Pull Request ใหม่เข้ามา

ตัวอย่างโค้ดในไฟล์ Workflow:

yaml


on:
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - run: npm install
    - run: npm test
Workflow นี้จะทำงานทุกครั้งเมื่อมีการสร้าง Pull Request โดยจะทำการติดตั้ง Node.js และรันการทดสอบ (npm test) เพื่อให้มั่นใจว่าโค้ดไม่มีข้อผิดพลาดก่อนที่จะทำการ merge เข้ากับโปรเจกต์หลัก

4. การปรับใช้โปรเจกต์บนคลาวด์
ผมได้ใช้ GitHub Pages ในการปรับใช้โปรเจกต์เป็นเว็บไซต์ โดยสร้างไฟล์ index.html เพื่อแสดงหน้าเว็บ จากนั้นตั้งค่าที่หน้า "Settings" > "Pages" และเลือกสาขาของโปรเจกต์ (main) เพื่อทำการปรับใช้เว็บไซต์ ซึ่งหลังจากตั้งค่าเรียบร้อยแล้ว GitHub ได้สร้างลิงก์ไปยังเว็บไซต์ที่ปรับใช้

5. ประสบการณ์และข้อคิดในการทำงาน
กระบวนการนี้ทำให้ผมได้เรียนรู้เกี่ยวกับการใช้ GitHub ในการจัดการโปรเจกต์ซอฟต์แวร์ ทั้งการควบคุมเวอร์ชัน การทำงานร่วมกัน และการใช้ระบบอัตโนมัติในการทดสอบและปรับใช้โปรเจกต์ การใช้ GitHub Actions ช่วยให้การตรวจสอบคุณภาพของโค้ดเป็นไปอย่างมีประสิทธิภาพ ทำให้โปรเจกต์มีความน่าเชื่อถือมากขึ้น อีกทั้งยังทำให้เข้าใจความสำคัญของการทำงานร่วมกันในโปรเจกต์ซอฟต์แวร์
file:///C:/Users/user123/Documents/GitHub/Project1/index.html


