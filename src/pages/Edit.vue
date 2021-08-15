<template>
  <el-card class="box-card">
    <h2>基本信息</h2>
    <el-form ref="form" :model="resume" label-width="80px">
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
        <el-card>
          <el-form :model="item" label-width="80px">
            <el-form-item label="公司名称">
              <el-input v-model="item.companyName"></el-input>
            </el-form-item>
            <el-form-item label="职位名称">
              <el-input v-model="item.companyName"></el-input>
            </el-form-item>
            <el-form-item label="在职时间">
              <el-input v-model="item.companyName"></el-input>
            </el-form-item>
            <el-form-item label="工作内容">
              <template v-for="(line, index) in item.content" :key="index">
                <el-input :model-value="line"></el-input>
              </template>
            </el-form-item>
          </el-form>
        </el-card>
      </template>
      <h2>教育经历</h2>
      <template v-for="(item, index) in resume.educationExperience" :key="index">
        <el-card>
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
      <h2>项目经历</h2>
      <template v-for="(item, index) in resume.projectExperience" :key="index">
        <el-card>
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
            <el-form-item label="二维码图片地址">
              <el-input v-model="item.QRCode"></el-input>
            </el-form-item>
            <el-form-item label="截图/介绍图片">
              <template v-for="(pic, index) in item.pictureList" :key="index">
                <el-input :model-value="pic"></el-input>
              </template>
            </el-form-item>
          </el-form>
        </el-card>
      </template>
      <h2>技术栈</h2>
      <template v-for="(value, name, index) in resume.techStack" :key="index">
        <el-card>
          <el-form label-width="80px">
            <el-form-item label="分类名称">
              <el-input :model-value="name"></el-input>
            </el-form-item>
            <el-form-item label="项目">
              <template v-for="(item, index) in value" :key="index">
                <el-input :model-value="item"></el-input>
              </template>
            </el-form-item>
          </el-form>
        </el-card>
      </template>
      <h2>自我介绍</h2>
      <!-- <el-form-item label="姓名">
        <el-input v-model="resume.selfIntroduction"></el-input>
      </el-form-item> -->
      <el-input v-model="resume.selfIntroduction" type="textarea"></el-input>
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
    return {
      resume,
    };
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 800px;
  margin: 0 auto;
}
</style>