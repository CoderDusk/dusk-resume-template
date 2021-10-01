<template>
  <div class="container">
    <el-row :gutter="40">
      <el-col :xs="24" :md="8" :lg="6" class="left-col">
        <div class="bio-head">
          <div class="name">{{ resume.basicInfo.fullName }}</div>
          <div class="job">{{ resume.basicInfo.job }}</div>
        </div>
        <div class="bio-foot">
          <div class="container">
            <div v-if="resume.basicInfo.email">
              <i class="el-icon-message"></i>{{ resume.basicInfo.email }}
            </div>
            <div v-if="resume.basicInfo.mobile">
              <i class="el-icon-mobile-phone"></i>{{ resume.basicInfo.mobile }}
            </div>
            <div v-if="resume.basicInfo.wechat">
              <i class="iconfont icon-weixin"></i>{{ resume.basicInfo.wechat }}
            </div>
            <div v-if="resume.basicInfo.birthDate">
              <i class="el-icon-date"></i>{{ resume.basicInfo.birthDate }}
            </div>
            <div v-if="resume.basicInfo.address">
              <i class="el-icon-location-information"></i
              >{{ resume.basicInfo.address }}
            </div>
            <div v-if="resume.basicInfo.salary">
              <i class="el-icon-money"></i>{{ resume.basicInfo.salary }}
            </div>
          </div>

          <a
            v-if="resume.resumeDownloadLink"
            :href="resume.resumeDownloadLink"
            class="download-link"
            download
            ><el-button
              type="primary"
              size="mini"
              round
              icon="el-icon-download"
              class="download-button"
              >下载简历</el-button
            ></a
          >
        </div>
      </el-col>
      <el-col :xs="24" :md="16" :lg="16">
        <div class="main">
          <div class="work-experience main-content-pannel">
            <div class="title">工作经历</div>
            <div class="divide-line"></div>
            <template
              v-for="(work, index) in resume.workExperience"
              :key="index"
            >
              <div class="work-experience-card">
                <el-card>
                  <div class="company-name">{{ work.companyName }}</div>
                  <div class="work-info">
                    <span>{{ work.job }}</span>
                    <span class="work-duration">{{ work.duration }}</span>
                  </div>
                  <div class="description">
                    <!-- <div v-for="(p, index) in work.content" :key="index">
                      <div v-if="p.trim() === ''"><br /></div>
                      {{ p }}
                    </div> -->
                    {{ work.content }}
                  </div>
                </el-card>
              </div>
            </template>
          </div>
          <div class="education-experience main-content-pannel">
            <div class="title">教育经历</div>
            <div class="divide-line"></div>
            <el-timeline>
              <el-timeline-item
                v-for="(school, index) in resume.educationExperience"
                :key="index"
              >
                <div class="school-name">{{ school.schoolName }}</div>
                <div class="school-info">
                  <span>{{ school.degree }}</span>
                  <span>{{ school.major }}</span>
                  <span>{{ school.duration }}</span>
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
          <div class="project-experience main-content-pannel">
            <div class="title">项目经历</div>
            <div class="divide-line"></div>

            <div class="card-list">
              <template
                v-for="(project, index) in resume.projectExperience"
                :key="index"
              >
                <el-card class="card-item">
                  <template #header>
                    <div class="card-header">
                      <span>{{ project.name }}</span>
                      <div class="button-list">
                        <a
                          :href="project.link"
                          v-if="project.link"
                          target="_blank"
                          ><el-button
                            size="mini"
                            type="primary"
                            class="button-item"
                            >项目地址</el-button
                          ></a
                        >
                        <el-popover
                          placement="top"
                          trigger="click"
                          v-if="project.QRCode"
                        >
                          <template #reference>
                            <el-button
                              type="primary"
                              size="mini"
                              class="button-item"
                              >查看小程序码</el-button
                            >
                          </template>
                          <el-image
                            style=""
                            :src="project.QRCode"
                            fit="fit"
                          ></el-image>
                        </el-popover>

                        <el-image-viewer
                          v-if="isShowImageViewer"
                          @close="isShowImageViewer = false"
                          :url-list="project.pictureList"
                        />
                        <el-button
                          type="primary"
                          size="mini"
                          @click="isShowImageViewer = true"
                          v-if="project.pictureList.length !== 0"
                          class="button-item"
                          >查看截图</el-button
                        >
                      </div>
                    </div>
                  </template>
                  <div>{{ project.content }}</div>
                </el-card>
              </template>
            </div>
          </div>
          <div class="tech-stack main-content-pannel">
            <div class="title">技术栈</div>
            <div class="divide-line"></div>

            <div class="card-list">
              <template v-for="(item, index) in resume.techStack" :key="index">
                <el-card class="card-item">
                  <template #header>
                    {{ item.name }}
                  </template>
                  <div class="tag-list">
                    <div
                      class="tech-tag"
                      v-for="(item, index) in item.list.split(',')"
                      :key="index"
                    >
                      <el-tag>{{ item }}</el-tag>
                    </div>
                  </div>
                </el-card>
              </template>
            </div>
          </div>
          <div class="about-me main-content-pannel">
            <div class="title">自我评价</div>
            <div class="divide-line"></div>
            <div>{{ resume.selfIntroduction }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Preview",
  setup() {
    const resume = JSON.parse(localStorage.getItem("resume"));
    document.title = resume.title;

    resume.workExperience.forEach((element) => {
      console.log(element);
    });

    let isShowImageViewer = ref(false);
    let currentImgList = reactive([]);

    function showImageViewer(imgList) {
      currentImgList = imgList;
      isShowImageViewer.value = true;
    }

    return {
      resume,
      isShowImageViewer,
      showImageViewer,
      currentImgList,
    };
  },
};
</script>

<style lang="scss">
// 设置网页整体背景，设置了两张背景图片，背景图片是否重复、位置等属性可以设置两个值，分别对应两张图片
body {
  background-color: rgb(240, 240, 246);
  background-image: url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6fec5402-1210-4b81-9949-97c1987784b9/7499570b-3f82-49d3-934f-f6c13b4f1cb3.svg"),
    url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6fec5402-1210-4b81-9949-97c1987784b9/b7bf8c6f-e689-4cd1-9c77-ef3b37b89abc.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
}
</style>

<style lang="scss" scoped>
// 引入微信图标自定义字体文件
@font-face {
  font-family: "iconfont"; /* Project id 2733423 */
  src: url("../static/iconfont.woff2?t=1628554215418") format("woff2"),
    url("../static/iconfont.woff?t=1628554215418") format("woff"),
    url("../static/iconfont.ttf?t=1628554215418") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-weixin:before {
  content: "\e62a";
}
// 定义常用变量
$grayBackgroundColor: #f8fafb;
$fontColor: #44566c;
// 设置文字被选择时的样式，覆盖了默认样式
::selection {
  background-color: rgba(0, 0, 0, 0);
  color: #0045ff;
}

// 网页主体内容限定在85%宽度内显示，用以保留左右两边的宽度
.container {
  max-width: 85%;
  margin: 0 auto;
  color: #44566c;
}

.bio-head {
  background-color: white;
  border-radius: 20px 20px 0 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  .name {
    font-size: 26px;
  }
  .job {
    background-color: #f0f0f6;
    padding: 5px 10px;
    border-radius: 20px;
    margin-top: 10px;
  }
}

.bio-foot {
  background-color: $grayBackgroundColor;
  border-radius: 0 0 20px 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  word-break: break-all;

  i {
    margin-right: 10px;
  }

  .download-link {
    text-align: center;
  }

  .download-button {
    margin-top: 20px;
    font-size: 20px;
  }
}

.main {
  padding-top: 40px;

  .title {
    font-size: 30px;
    font-weight: bold;
  }

  .main-content-pannel {
    padding: 30px;
  }
  .main-content-pannel:nth-child(odd) {
    background-color: white;
  }
  .main-content-pannel:nth-child(even) {
    background-color: $grayBackgroundColor;
  }
  .main-content-pannel:first-child {
    border-radius: 20px 20px 0 0;
  }
  .main-content-pannel:last-child {
    border-radius: 0 0 20px 20px;
    margin-bottom: 60px;
  }
}
// 分割线
.divide-line {
  width: 50px;
  height: 4px;
  background-color: #0045ff;
  margin: 10px 0 20px 0;
}
// 公用卡片样式
.card-list {
  display: flex;
  flex-wrap: wrap;

  .card-item {
    width: 300px;
    margin: 20px;

    color: $fontColor;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
// 工作经历
.work-experience {
  .work-experience-card {
    margin: 30px 0;

    .company-name {
      font-size: 18px;
      font-weight: bold;
      color: $fontColor;
    }

    .work-info {
      color: gray;
      margin: 5px 0;
      .work-duration {
        margin-left: 15px;
      }
    }

    .description {
      color: $fontColor;
      white-space: pre-wrap;
    }
  }
}
// 教育经历
.education-experience {
  .school-name {
    font-size: 18px;
    font-weight: bold;
    color: $fontColor;
  }
  .school-info {
    margin-top: 5px;
    color: $fontColor;
    span {
      margin-right: 15px;
    }
  }
  .el-timeline {
    padding-left: 0;
  }
}

// 项目经历
.project-experience {
  .button-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .button-item {
      margin-bottom: 5px;
      margin-left: 0;
    }
  }
}

// 技术栈
.tech-stack {
  .tag-list {
    display: flex;
    flex-wrap: wrap;

    .tech-tag {
      margin: 0 10px 10px 0;
    }
  }
}
</style>