<template>
	<view class="main">
		<el-card class="overall-card">
			<el-form ref="form" :model="resume" label-position="top" :inline="true">
				<!-- 个人信息 -->
				<view class="panel">
					<view class="title-bar">
						<view class="title">个人信息</view>
					</view>
					<view class="panel-body">
						<el-row>
							<el-col :span="12">
								<el-form-item label="姓名">
									<el-input v-model="resume.basicInfo.fullName"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="当前求职状态">
									<el-select v-model="resume.basicInfo.jobStatus" placeholder="请选择当前求职状态">
										<el-option v-for="item in dataDictionary.jobStatusList" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								<el-form-item label="性别">
									<el-radio-group v-model="resume.basicInfo.gender">
										<el-radio-button label="男"></el-radio-button>
										<el-radio-button label="女"></el-radio-button>
										<el-radio-button label="其他"></el-radio-button>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="生日">
									<el-date-picker v-model="resume.basicInfo.birthDate" type="month"
										placeholder="选择日期">
									</el-date-picker>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								<el-form-item label="电话">
									<el-input v-model="resume.basicInfo.mobile"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="参加工作时间">
									<el-date-picker v-model="resume.basicInfo.startWorkingDate" type="month"
										placeholder="选择日期">
									</el-date-picker>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								<el-form-item label="微信号">
									<el-input v-model="resume.basicInfo.wechat"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="电子邮箱">
									<el-input v-model="resume.basicInfo.email"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</view>
				</view>
	
				<!-- 个人优势 -->
				<view class="panel">
					<view class="title-bar">
						<view class="title">个人优势</view>
					</view>
					<view class="panel-body">
						<el-input v-model="resume.selfIntroduction" type="textarea" autosize></el-input>
					</view>
				</view>
	
				<!-- 期望职位 -->
				<view class="panel">
					<view class="title-bar">
						<view class="title">期望职位</view>
					</view>
					<view class="panel-body">
						<el-row>
							<el-col :span="12">
								<el-form-item label="期望职位">
									<el-input v-model="resume.desiredPosition.job"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="求职类型">
									<el-select v-model="resume.desiredPosition.type" placeholder="请选择求职类型">
										<el-option v-for="item in dataDictionary.jobType" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								<el-form-item label="工作城市">
									<el-input v-model="resume.desiredPosition.city"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="期望行业">
									<el-input v-model="resume.desiredPosition.industry"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								<el-form-item label="期望薪资">
									<el-input v-model="resume.desiredPosition.salary"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</view>
				</view>
	
	
				<!-- 工作经历 -->
				<view class="panel">
					<view class="title-bar">
						<view class="title">工作经历</view>
						<el-button @click="addItem('work')" size="mini" type="primary">添加</el-button>
					</view>
				</view>
	
				<div class="title-with-add-button">
				</div>
	
				<block v-for="(item, index) in resume.workExperience" :key="item.id">
					<el-card class="card-item">
						<el-form :model="item">
							<el-row>
								<el-col :span="12">
									<el-form-item label="公司名称">
										<el-input v-model="item.companyName"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item label="职位名称">
										<el-input v-model="item.job"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="12">
									<el-form-item label="在职时间">
										<el-input v-model="item.duration"></el-input>
									</el-form-item>
								</el-col>
							</el-row>
							<el-form-item label="工作内容">
								<el-input v-model="item.content" type="textarea" autosize></el-input>
							</el-form-item>
	
	
						</el-form>
						<div class="delete-button">
							<el-button type="danger" icon="el-icon-delete"
								@click="resume.workExperience.splice(index, 1)" circle></el-button>
						</div>
					</el-card>
				</block>
	
				<div class="title-with-add-button">
					<h3>教育经历</h3>
					<el-button @click="addItem('education')" size="mini" type="primary">添加</el-button>
				</div>
				<block v-for="(item, index) in resume.educationExperience" :key="item.id">
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
							<el-button type="danger" icon="el-icon-delete"
								@click="resume.educationExperience.splice(index, 1)" circle></el-button>
						</div>
					</el-card>
				</block>
				<div class="title-with-add-button">
					<h3>项目经验</h3>
					<el-button @click="addItem('project')" size="mini" type="primary">添加</el-button>
				</div>
				<block v-for="(item, index) in resume.projectExperience" :key="item.id">
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
								<block v-for="(pic, picIndex) in item.pictureList" :key="picIndex">
									<el-input v-model="
		                    resume.projectExperience[index].pictureList[picIndex]
		                  " class="input-item">
										<template #append>
											<el-button icon="el-icon-delete"
												@click="deletePictureItem(index, picIndex)"></el-button>
										</template>
									</el-input>
								</block>
								<div class="add-item-button">
									<!-- <el-button
		                  type="primary"
		                  @click="resume.projectExperience[index].pictureList.push('')"
		                  icon="el-icon-plus"
		                  circle
		                ></el-button> -->
	
									<el-button type="primary"
										@click="resume.projectExperience[index].pictureList.push('')">添加一张图片</el-button>
	
									<el-button type="danger" @click="resume.projectExperience.splice(index, 1)">删除这个项目
									</el-button>
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
				</block>
				<div class="title-with-add-button">
					<h3>技术栈</h3>
					<el-button @click="addItem('tech')" size="mini" type="primary">添加</el-button>
				</div>
				<block v-for="(item, index1) in resume.techStack" :key="item.id">
					<el-card class="card-item">
						<el-form :model="item" label-width="80px">
							<el-form-item label="分类名称">
								<el-input v-model="item.name"></el-input>
							</el-form-item>
							<el-form-item label="技术">
								<!-- <el-input
		                v-model="item.list"
		                autocorrect="off"
		                spellcheck="false"
		                class="input-item"
		              ></el-input> -->
							</el-form-item>
						</el-form>
						<div class="delete-button">
							<el-button type="danger" icon="el-icon-delete" @click="resume.techStack.splice(index, 1)"
								circle></el-button>
						</div>
					</el-card>
				</block>
	
				<h3>导入导出</h3>
				<div class="button-list">
					<el-button @click="saveResume" type="primary">保存到本地存储</el-button>
					<el-button @click="exportResume" type="primary">导出简历</el-button>
					<el-upload :show-file-list="false" :auto-upload="false" action="https://www.baidu.com/"
						:http-request="null" :on-change="null" accept=".json">
						<el-button @click="importResume" type="primary">导入简历</el-button>
					</el-upload>
					<el-button type="primary" @click="previewResume">预览</el-button>
				</div>
			</el-form>
		</el-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: "",
				loading: {
					uploadResume: false,
				},
				dataDictionary: {
					jobStatusList: [{
							value: 0,
							label: '离职-随时到岗'
						},
						{
							value: 1,
							label: '在职-暂不考虑'
						},
						{
							value: 2,
							label: '在职-考虑机会'
						},
						{
							value: 3,
							label: '在职-月内到岗'
						}
					],
					jobType: [{
							value: 0,
							label: '全职'
						},
						{
							value: 1,
							label: '兼职'
						},
						{
							value: 2,
							label: '远程全职'
						},
						{
							value: 3,
							label: '远程兼职'
						},
					],
					schoolType: [{
						value: 0,
						label: '全日制'
					}, {
						value: 0,
						label: '非全日制'
					}, ]
				},
				resume: {
					// 基本信息
					basicInfo: {
						// 姓名
						fullName: '',
						// 性别
						gender:null,
						// 出生年月
						birthDate: '',
						// 求职状态
						jobStatus:'',
						// 邮箱
						email: '',
						// 电话
						mobile: '',
						// 微信
						wechat: '',
						// 参加工作时间
						participationTime:''
					},
					// 个人优势
					advantage: '',
					// 期望职位
					desiredPosition: {
						// 求职类型
						type: null,
						// 工作城市
						city:'',
						// 期望岗位
						job:'',
						// 期望行业
						industry:'',
						// 期望薪水
						salary:null,	
					},
					// 工作经历
					workExperience: [],
					// 教育经历
					educationExperience: [],
					// 项目经验
					projectExperience: [],
					// 技术栈
					techStack: [],
					// 简历设置
					setting:{
						// 简历下载地址
						downloadLink:'',
						// 简历访问密码
						visitPassword:'',
						// 隐私信息访问密码
						privacy:''
					}
				},

			}
		},
		methods: {
			uploadResume() {
				uni.chooseFile({
					count: 1,
					success: (res) => {
						const fileSize = res.tempFiles[0].size / Math.pow(1024, 2)
						if (fileSize > 100) {
							this.$message.error('上传文件不能大于100MB')
						} else {
							this.loading.uploadResume = true
							const filePath = res.tempFilePaths[0]
							const cloudPath = res.tempFiles[0].name
							uniCloud.uploadFile({
								filePath,
								cloudPath,
								success: (res) => {
									this.loading.uploadResume = false
									this.resume.siteInfo.resumeFile = {
										fileName: cloudPath,
										linkURL: res.fileID
									}
								},
								complete: () => {
									this.loading.uploadResume = false
								}
							})
						}
					},
				})
			}
		},
		watch:{
			resume:{
				handler(value){
					console.log(value)
				},
				deep:true
			}
		}
	}
</script>

<style>
	.main {
		background-color: rgb(240, 240, 246);
		background-image: url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6fec5402-1210-4b81-9949-97c1987784b9/7499570b-3f82-49d3-934f-f6c13b4f1cb3.svg"),
			url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6fec5402-1210-4b81-9949-97c1987784b9/b7bf8c6f-e689-4cd1-9c77-ef3b37b89abc.svg");
		background-repeat: no-repeat, no-repeat;
		background-position: top left, bottom right;
	}
</style>
<style lang="scss" scoped>
	.overall-card {
		width: 800px;
		margin: 0 auto;
	}

	.panel {
		.title-bar {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-size: 20px;
				font-weight: bold;
				display: flex;
				align-items: center;
			}

			.title::before {
				content: '';
				width: 5px;
				height: 26px;
				background-color: rgb(64, 158, 255);
				border-radius: 10px;
				margin-right: 10px;
			}
		}
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

	.resume-file-name {
		// background-color: pink;
		color: gray;
	}
</style>
