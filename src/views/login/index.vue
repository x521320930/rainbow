<style src="./style.scss" lang="scss" scoped></style>
<template src="./template.html" />

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { h5_do } from '@/api';
interface RequestParameter {
  service: string;
  [propName: string]: any;
}
@Component({ name: 'Login' })
export default class Login extends Vue {
  // 属性
  private poster_bg: string = require('@/assets/login/bg.png');
  private poster_mobile: string = require('@/assets/login/input_bg.png');
  private poster_btn: string = require('@/assets/login/btn.png');
  // 属性
  // 获取海报咨询
  private get_poster_info(): void {
    const transmitValue: RequestParameter = {
      service: '200017',
      h5Type: 'first'
    };
    h5_do(transmitValue)
      .then((res: any) => {
        const { data, code } = res;
        if (code === '000') {
          const { advertiseList: list } = data;
          if (list[0].defaultPicture) this.poster_bg = list[0].defaultPicture;
          if (list[1].defaultPicture) this.poster_btn = list[0].defaultPicture;
          if (list[2].defaultPicture) this.poster_mobile = list[0].defaultPicture;
        } else {
          console.log(code);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
