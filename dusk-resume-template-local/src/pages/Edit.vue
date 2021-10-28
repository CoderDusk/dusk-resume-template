<template>
  <el-card class="box-card">
    <el-form ref="form" :model="resume" label-width="120px">
      <h3>网站信息</h3>
      <el-form-item label="网站标题">
        <el-input v-model="resume.title"></el-input>
      </el-form-item>
      <el-form-item label="网站地址">
        <el-input v-model="resume.siteURL"></el-input>
      </el-form-item>
      <el-form-item label="简历下载地址">
        <el-input v-model="resume.resumeDownloadLink"></el-input>
      </el-form-item>
      <h3>基本信息</h3>
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
      <div class="title-with-add-button">
        <h3>工作经历</h3>
        <el-button @click="addItem('work')" size="mini" type="primary"
          >添加</el-button
        >
      </div>

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
              <el-input
                v-model="item.content"
                type="textarea"
                autosize
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="delete-button">
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="resume.workExperience.splice(index, 1)"
              circle
            ></el-button>
          </div>
        </el-card>
      </template>

      <div class="title-with-add-button">
        <h3>教育经历</h3>
        <el-button @click="addItem('education')" size="mini" type="primary"
          >添加</el-button
        >
      </div>
      <template
        v-for="(item, index) in resume.educationExperience"
        :key="index"
      >
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
          <div class="delete-button">
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="resume.educationExperience.splice(index, 1)"
              circle
            ></el-button>
          </div>
        </el-card>
      </template>
      <div class="title-with-add-button">
        <h3>项目经验</h3>
        <el-button @click="addItem('project')" size="mini" type="primary"
          >添加</el-button
        >
      </div>
      <template v-for="(item, index) in resume.projectExperience" :key="index">
        <el-card class="card-item">
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
              <template
                v-for="(pic, picIndex) in item.pictureList"
                :key="picIndex"
              >
                <el-input
                  v-model="
                    resume.projectExperience[index].pictureList[picIndex]
                  "
                  class="input-item"
                >
                  <template #append>
                    <el-button
                      icon="el-icon-delete"
                      @click="deletePictureItem(index, picIndex)"
                    ></el-button>
                  </template>
                </el-input>
              </template>
              <div class="add-item-button">
                <!-- <el-button
                  type="primary"
                  @click="resume.projectExperience[index].pictureList.push('')"
                  icon="el-icon-plus"
                  circle
                ></el-button> -->

                <el-button
                  type="primary"
                  @click="resume.projectExperience[index].pictureList.push('')"
                  >添加一张图片</el-button
                >

                <el-button
                  type="danger"
                  @click="resume.projectExperience.splice(index, 1)"
                  >删除这个项目</el-button
                >
              </div>

              <!-- <div class="delete-button">
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  @click="resume.projectExperience.splice(index, 1)"
                  circle
                ></el-button>
              </div> -->
            </el-form-item>
          </el-form>
        </el-card>
      </template>
      <div class="title-with-add-button">
        <h3>技术栈</h3>
        <el-button @click="addItem('tech')" size="mini" type="primary"
          >添加</el-button
        >
      </div>
      <template v-for="(item, index1) in resume.techStack" :key="index1">
        <el-card class="card-item">
          <el-form :model="item" label-width="80px">
            <el-form-item label="分类名称">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
            <el-form-item label="技术">
              <el-input
                v-model="item.list"
                autocorrect="off"
                spellcheck="false"
                class="input-item"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="delete-button">
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="resume.techStack.splice(index, 1)"
              circle
            ></el-button>
          </div>
        </el-card>
      </template>
      <h3>自我介绍</h3>
      <el-input
        v-model="resume.selfIntroduction"
        type="textarea"
        autosize
      ></el-input>
      <h3>导入导出</h3>
      <div class="button-list">
        <el-button @click="saveResume" type="primary">保存到本地存储</el-button>
        <el-button @click="exportResume" type="primary">导出简历</el-button>
        <el-upload
          :show-file-list="false"
          :auto-upload="false"
          action="https://www.baidu.com/"
          :http-request="voidFunction"
          :on-change="importResume"
          accept=".json"
        >
          <el-button @click="importResume" type="primary">导入简历</el-button>
        </el-upload>
        <el-button type="primary" @click="previewResume">预览</el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script>
import { reactive } from "vue";
import router from "../router/index";
import { ElMessage } from "element-plus";
import FileSaver from "file-saver";
export default {
  name: "Edit",
  setup() {
    let data = JSON.parse(localStorage.getItem("resume"));
    let resume = reactive(data);
    document.title = resume.title;
    function saveResume() {
      localStorage.setItem("resume", JSON.stringify(resume));
      ElMessage.success("保存成功");
    }
    function exportResume() {
      const data = JSON.stringify(resume);
      const blob = new Blob([data], { type: "" });
      FileSaver.saveAs(blob, "data.json");
      ElMessage.success("导出成功，请把data.json放在src目录下");
    }
    function importResume(res) {
      if (res.name !== undefined) {
        let reader = new FileReader();
        reader.readAsText(res.raw);
        reader.onload = (e) => {
          const result = JSON.parse(e.target.result);
          if (result.isResumeData === "yes") {
            Object.keys(result).forEach((key) => {
              resume[key] = result[key];
            });
            ElMessage.success("导入成功");
          }
        };
      }
    }
    function previewResume() {
      router.push("/preview");
    }
    function addItem(type) {
      if (type === "work") {
        resume.workExperience.push({});
      } else if (type === "project") {
        resume.projectExperience.push({ pictureList: [""] });
      } else if (type === "education") {
        resume.educationExperience.push({});
      } else if (type === "tech") {
        resume.techStack.push({});
      }
    }
    function deletePictureItem(projectIndex, pictureIndex) {
      resume.projectExperience[projectIndex].pictureList.splice(
        pictureIndex,
        1
      );
      if (resume.projectExperience[projectIndex].pictureList.length === 0) {
        resume.projectExperience[projectIndex].pictureList.push("");
      }
    }
    return {
      resume,
      saveResume,
      exportResume,
      importResume,
      addItem,
      deletePictureItem,
      previewResume,
    };
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 800px;
  margin: 40px auto;
}

.card-item {
  margin-bottom: 20px;
  .delete-button {
    display: none;
  }
}

.card-item:hover {
  .delete-button {
    display: block;
    text-align: center;
  }
}

.input-item {
  margin-bottom: 10px;
}

.button-list {
  display: flex;
  .el-button {
    margin-left: 0;
    margin-right: 20px;
  }
}

.add-item-button {
  text-align: center;
}

.title-with-add-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-button {
    height: 24px;
  }
}
</style>