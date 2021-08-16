<template>
  <el-card class="box-card">
    <el-form ref="form" :model="resume" label-width="120px">
      <h2>网站信息</h2>
      <el-form-item label="网站标题">
        <el-input v-model="resume.title"></el-input>
      </el-form-item>
      <el-form-item label="网站地址">
        <el-input v-model="resume.siteURL"></el-input>
      </el-form-item>
      <el-form-item label="简历下载地址">
        <el-input v-model="resume.resumeDownloadLink"></el-input>
      </el-form-item>
      <h2>基本信息</h2>
      <el-form-item label="姓名">
        <el-input v-model="resume.basicInfo.fullName"></el-input>
      </el-form-item>
      <el-form-item label="应聘岗位">
        <el-input v-model="resume.basicInfo.job"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="resume.basicInfo.birthDate"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-input v-model="resume.basicInfo.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="resume.basicInfo.mobile"></el-input>
      </el-form-item>
      <el-form-item label="微信号">
        <el-input v-model="resume.basicInfo.wechat"></el-input>
      </el-form-item>
      <el-form-item label="期望薪资">
        <el-input v-model="resume.basicInfo.salary"></el-input>
      </el-form-item>
      <el-form-item label="期望城市">
        <el-input v-model="resume.basicInfo.address"></el-input>
      </el-form-item>
      <h2>工作经历</h2>
      <template v-for="(item, index) in resume.workExperience" :key="index">
        <el-card class="card-item">
          <el-form :model="item" label-width="80px">
            <el-form-item label="公司名称">
              <el-input v-model="item.companyName"></el-input>
            </el-form-item>
            <el-form-item label="职位名称">
              <el-input v-model="item.job"></el-input>
            </el-form-item>
            <el-form-item label="在职时间">
              <el-input v-model="item.duration"></el-input>
            </el-form-item>
            <el-form-item label="工作内容">
              <el-input v-model="item.content" type="textarea" autosize></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </template>
      <el-button @click="addItem('work')" type="primary" icon="el-icon-plus" circle></el-button>
      <h2>教育经历</h2>
      <template v-for="(item, index) in resume.educationExperience" :key="index">
        <el-card class="card-item">
          <el-form :model="item" label-width="80px">
            <el-form-item label="学校名称">
              <el-input v-model="item.schoolName"></el-input>
            </el-form-item>
            <el-form-item label="学历">
              <el-input v-model="item.degree"></el-input>
            </el-form-item>
            <el-form-item label="专业">
              <el-input v-model="item.major"></el-input>
            </el-form-item>
            <el-form-item label="在校时间">
              <el-input v-model="item.duration"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </template>
      <el-button @click="addItem('education')" type="primary" icon="el-icon-plus" circle></el-button>
      <h2>项目经历</h2>
      <template v-for="(item, index) in resume.projectExperience" :key="index">
        <el-card  class="card-item">
          <el-form :model="item" label-width="80px">
            <el-form-item label="项目名称">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
            <el-form-item label="项目简介">
              <el-input v-model="item.content"></el-input>
            </el-form-item>
            <el-form-item label="项目链接">
              <el-input v-model="item.link"></el-input>
            </el-form-item>
            <el-form-item label="二维码">
              <el-input v-model="item.QRCode"></el-input>
            </el-form-item>
            <el-form-item label="图片列表">
              <template v-for="(pic, index) in item.pictureList" :key="index">
                <el-input :model-value="pic" class="input-item"></el-input>
              </template>
            </el-form-item>
          </el-form>
        </el-card>
      </template>
      <el-button @click="addItem('project')" type="primary" icon="el-icon-plus" circle></el-button>
      <h2>技术栈</h2>
      <template v-for="(item, index) in resume.techStack" :key="index">
        <el-card  class="card-item" >

            <el-form-item label="分类名称">
              <el-input :model-value="resume.techStack[index].name"></el-input>
            </el-form-item>
            <el-form-item label="项目">
              <template v-for="(item, index) in item.value" :key="index">
                <el-input :model-value="item" class="input-item"></el-input>
              </template>
            </el-form-item>
        </el-card>
      </template>
      <h2>自我介绍</h2>
      <el-input v-model="resume.selfIntroduction" type="textarea" autosize></el-input>
      <h2>保存导出</h2>
      <el-button @click="saveResume" type="primary">保存</el-button>
    </el-form>
  </el-card>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Edit",
  setup() {
    let data = JSON.parse(localStorage.getItem("resume"));
    
    let resume = reactive(data);
    document.title = resume.title;

    function saveResume(){
      localStorage.setItem('resume',JSON.stringify(resume))
    }

    function exportResume(){

    }

    function importResume(){

    }

    function addItem(type){
      console.log(123)
      if(type === 'work'){
        console.log(resume.workExperience.length)
        resume.workExperience.push({
          companyNmae:'',
          job:'',
          duration:'',
          content:''
        })
        console.log(resume.workExperience.length)
      } else if (type === 'project'){
        resume.projectExperience.push({
          name:'',
          content:'',
          link:'',
          pictureList:[],
          QRCode:''
        })
      } else if (type === 'education'){
        resume.educationExperience.push({
          schoolName:'',
          degree:'',
          major:'',
          duration:''
        })
      } else if( type === 'tech' ){
        resume.techStack.push({

        })
      }
    }


    return {
      resume,
      saveResume,
      exportResume,
      importResume,
      addItem,
    };
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 800px;
  margin: 40px auto;
}

.card-item{
  margin-bottom: 20px;
}

.input-item{
  margin-bottom: 10px;
}
</style>