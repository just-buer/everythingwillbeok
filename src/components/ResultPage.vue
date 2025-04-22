<script setup>
import { onMounted, ref, computed } from 'vue';
import * as echarts from 'echarts';
import { calculateEntropyResults } from './entropyCalculator.js';

// 假设通过路由参数传递分数
const scores = ref({});

const result = ref({})

const totalEntropyCategory = computed(() => {
  const entropyState = result.value.entropyState

  // 总熵值分类
  let totalEntropyCategoryTemp = '';
  if (entropyState === 'low') {
    totalEntropyCategoryTemp = '低熵';
  } else if (entropyState === 'mid') {
    totalEntropyCategoryTemp = '中熵';
  } else {
    totalEntropyCategoryTemp = '高熵';
  }

    return totalEntropyCategoryTemp
})

const growthModel = computed(() => {
  
let growthModelTemp = '';
const {closednessType,resistanceType } = result.value
if (closednessType === 'growth' && resistanceType === 'efficient') {
  growthModelTemp = '海豚型';
} else if (closednessType === 'growth' && resistanceType !== 'efficient') {
  growthModelTemp = '树懒型';
} else if (closednessType !== 'growth' && resistanceType === 'efficient') {
  growthModelTemp = '犀牛型';
} else {
  growthModelTemp = '海鞘型';
}

return growthModelTemp
})

const growthModelMap = {
  '海豚型': '保持现有优势，关注细微改进点',
  '树懒型': '重点降低内心失序和能量失焦',
  '犀牛型': '需要突破思维封闭性',
  '海鞘型': '需系统性重建认知和行为模式'
};

onMounted(() => {
  const storedAnswers = localStorage.getItem('questionnaireAnswers');
  if (storedAnswers) {
    scores.value = JSON.parse(storedAnswers);
    const answers = Object.entries(scores.value).map(([id, score]) => ({ id: parseInt(id), score }));

    result.value = calculateEntropyResults(answers)

  

    // 初始化五向熵维图
    const entropyDimensionsChart = echarts.init(document.getElementById('entropy-dimensions-chart'));
    entropyDimensionsChart.setOption({
      tooltip: {},
      radar: {
        indicator: [
          { name: '封闭性', max: 5 },
          { name: '平衡态', max: 5 },
          { name: '高线性', max: 5 },
          { name: '内心失序', max: 5 },
          { name: '能量失焦', max: 5 }
        ]
      },
      series: [{
        type: 'radar',
        data: [{
          value: result.value.radarData.map(item => item.value),
          name: '五向熵维'
        }]
      }]
    });




// const entropyOptimization = growthModelMap[growthModel];

  } else {
    console.error('未接收到问卷答案');
  }
});
</script>

<template>
  <div class="result-page">
    <van-nav-bar title="问卷结果" fixed placeholder />
    <div class="result-content">
      <h2>您的问卷结果</h2>
      <p>我当前的总熵值是：<strong>{{ result.totalScore }}</strong>，暂时处于 <strong>{{ totalEntropyCategory }}</strong> 状态</p>
      <p>我在“封闭程度”的主维度得分是：<strong>{{ result.closednessScore }}</strong>，暂时为 <strong>{{ result.closednessType === 'growth' ? '成长型' : '固化型' }}</strong> 思维倾向</p>
      <p>我在“做功阻力”的主维度得分是：<strong>{{ result.resistanceScore }}</strong>，暂时为 <strong>{{ result.resistanceType === 'efficient' ? '增效型' : '内耗型' }}</strong> 做功倾向</p>
      <p>熵减优化方向：<strong>{{ growthModel }}</strong> - <strong>{{ growthModelMap[growthModel] }}</strong></p>
      <div id="entropy-dimensions-chart" style="width: 90vw;height:50vh;"></div>
    </div>
  </div>
</template>

<style scoped>
.result-page {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-bottom: 80px;
}

.result-content {
  padding: 16px;
  margin-top: 20px;
}
</style>

