<template>
  <div>
    <el-container>
      <el-main>
        <img src="@/assets/logo.png" alt="" />
      </el-main>

      <el-card class="box-card" :class="{ active: isShow == false }">
        <div slot="header" class="clearfix">
          <img src="@/assets/login_title.png" alt="" />
        </div>
        <div class="loginBox" v-show="isShow">
          <el-form
            :model="user"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="username">
              <el-input
                type="text"
                v-model="user.username"
                placeholder="请输入用户名"
                autocomplete="off"
              >
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="user.password"
                placeholder="请输入密码"
                autocomplete="off"
              >
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >登录</el-button
              >
            </el-form-item>

            <el-form-item>
              <a href="javascript:;" id="link-login" @click="isShow = false"
                >去注册</a
              >
            </el-form-item>
          </el-form>
        </div>

        <div class="regBox" v-show="!isShow">
          <el-form
            :model="user"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="username">
              <el-input
                type="text"
                v-model="user.username"
                placeholder="请输入用户名"
                autocomplete="off"
              >
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="user.password"
                placeholder="请输入密码"
                autocomplete="off"
              >
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>

            <el-form-item prop="repassword">
              <el-input
                type="password"
                v-model="user.repassword"
                placeholder="请确认密码"
                autocomplete="off"
              >
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >注册</el-button
              >
            </el-form-item>

            <el-form-item>
              <a
                href="javascript:;"
                id="link-login"
                @click="isShow = true"
                ref="goLogin"
                >去登录</a
              >
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-container>
  </div>
</template>

<script>
import { reguser, login } from "@/api/user";
export default {
  name: "loginIndex",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.user.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      isShow: true,
      user: {
        username: "",
        password: "",
        repassword: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[\S]{6,12}$/,
            message: "密码必须6到12位，且不能出现空格",
          },
        ],
        repassword: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      if (this.isShow) {
        if (this.user.username && this.user.password) {
          try {
            const { data } = await login({
              username: this.user.username,
              password: this.user.password,
            });
            if (data.code !== 0) {
              return this.$message({
                message: data.message,
                offset: 200,
                type: "error",
              });
            } else {
              this.$message({
                message: data.message,
                offset: 200,
                type: "success",
              });
            }

            this.$store.commit("getuser", data.token);
            this.$router.push({ path: "/index" });
          } catch (err) {
            this.$message({
              message: "登录失败,请稍后重试",
              offset: 200,
              type: "error",
            });
          }
        } else {
          return this.$message({
            message: "请填写完整信息",
            offset: 200,
            type: "warning",
          });
        }
      } else {
        if (this.user.username && this.user.password && this.user.repassword) {
          try {
            const { data } = await reguser(this.user);
            if (data.code !== 0) {
              return this.$message({
                message: data.message,
                offset: 200,
                type: "error",
              });
            }
            this.$message({
              message: data.message,
              offset: 200,
              type: "success",
            });
            this.$refs[formName].resetFields();
            this.$refs.goLogin.click();
          } catch (err) {
            this.$message({
              message: "注册失败,请稍后重试",
              offset: 200,
              type: "error",
            });
          }
        } else {
          return this.$message({
            message: "请填写完整信息",
            offset: 200,
            type: "warning",
          });
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
/deep/.el-container {
  width: 100%;
  height: 100vh;
  background: url(~@/assets/login_bg.jpg);
  background-size: cover;
  .el-main {
    img {
      width: 146px;
      height: 60px;
    }
  }
  .box-card {
    position: fixed;
    width: 400px;
    height: 310px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 170px;
    height: 25px;
  }
  .clearfix {
    text-align: center;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .loginBox,
  .regBox {
    .el-form-item__content {
      margin-left: 0 !important;
    }
    .el-button {
      width: 100%;
    }
    #link-login {
      margin-left: 300px;
      color: #ccc;
      text-decoration: none;
    }
  }
  .active {
    height: 380px;
  }
}
</style>