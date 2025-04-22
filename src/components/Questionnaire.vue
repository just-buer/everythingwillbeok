<script setup>
import { ref, computed } from 'vue';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
import { questions } from './config.js';

const answers = ref({});
const currentIndex = ref(0);
const loading = ref(false);

const router = useRouter()
console.log('router instance:', router)

const totalQuestions = questions.questions.length;
const progress = computed(() => Math.round(((currentIndex.value + 1) / totalQuestions) * 100));

const currentQuestion = computed(() => questions.questions[currentIndex.value]);

const getOptions = (question) => {
  return question.reverse_scoring ? questions.scoring.reverse_options : questions.scoring.options;
};



const nextQuestion = () => {
  if (currentIndex.value < totalQuestions - 1) {
    currentIndex.value++;
  }
};

const prevQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const submitQuestionnaire = async () => {
  loading.value = true;
  try {
    localStorage.setItem('questionnaireAnswers', JSON.stringify(answers.value));
    showToast({ type: 'success', message: '问卷提交成功！', position: 'top' });
    router.push({ path: '/result' });
  } catch (error) {
    console.error(error)
    showToast({ type: 'fail', message: '提交失败，请重试', position: 'top' });
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="questionnaire">
    <van-nav-bar
      title="多维熵值/熵型评估"
      fixed
      placeholder
    >
      <template #right>
        <span class="progress-text">{{ currentIndex + 1 }}/{{ totalQuestions }}</span>
      </template>
    </van-nav-bar>

    <van-progress 
      :percentage="progress"
      :show-pivot="false"
      class="progress-bar"
    />

    <div class="question-container">
      <div class="question-card">
        <p class="question-text">{{currentQuestion.id}}. {{ currentQuestion.text }}</p>
        <!-- @change="nextQuestion" -->
        <van-radio-group v-model="answers[currentQuestion.id]" direction="vertical">
          <van-radio
            v-for="option in getOptions(currentQuestion)"
            :key="option.value"
            :name="option.value"
            class="radio-option"
          >
            {{ option.label }}
          </van-radio>
        </van-radio-group>
      </div>
    </div>

    <div class="navigation-buttons">
      <van-button 
        plain 
        type="primary" 
        :disabled="currentIndex === 0"
        @click="prevQuestion"
      >
        上一题
      </van-button>

      <van-button 
        v-if="currentIndex < totalQuestions - 1"
        type="primary"
        :disabled="!answers[currentQuestion.id]"
        @click="nextQuestion"
      >
        下一题
      </van-button>

      <van-button 
        v-else
        type="success"
        :disabled="!answers[currentQuestion.id]"
        :loading="loading"
        @click="submitQuestionnaire"
      >
        提交
      </van-button>
    </div>
  </div>
</template>

<style scoped>
.questionnaire {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-bottom: 80px;
}

.progress-text {
  font-size: 14px;
  color: #969799;
}

.progress-bar {
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  z-index: 100;
}

.question-container {
  padding: 16px;
  margin-top: 20px;
}

.question-card {
  background: #fff;
  border-radius: 8px;
  padding: 20px 16px;
}

.question-text {
  font-size: 16px;
  line-height: 24px;
  color: #323233;
  margin: 0 0 24px;
}

.radio-option {
  margin-bottom: 12px;
  padding: 12px 16px;
  background: #f7f8fa;
  border-radius: 4px;
}

.radio-option:last-child {
  margin-bottom: 0;
}

.navigation-buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: #fff;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);
}

.navigation-buttons .van-button {
  flex: 1;
  margin: 0 8px;
}

.navigation-buttons .van-button:first-child {
  margin-left: 0;
}

.navigation-buttons .van-button:last-child {
  margin-right: 0;
}
</style>./config.js