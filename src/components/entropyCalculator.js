// src/utils/entropyCalculator.js
import {questions} from './config'

export const calculateEntropyResults = (answers) => {
    // 1. 计算总熵值
    const totalScore = answers.reduce((sum, ans) => sum + ans.score, 0)
    
    // 判断熵值状态
    let entropyState, entropyPercentage
    if (totalScore <= 64) {
      entropyState = 'low'
      entropyPercentage = (totalScore / 64) * 100
    } else if (totalScore <= 127) {
      entropyState = 'mid'
      entropyPercentage = ((totalScore - 64) / (127 - 64)) * 100 + 50
    } else {
      entropyState = 'high'
      entropyPercentage = ((totalScore - 127) / (160 - 127)) * 100 + 80
    }
    
    // 2. 计算封闭程度
  
    const closednessQuestions = questions.dimensions.main_dimensions.closedness_degree
    const closednessScore = answers
      .filter(a => closednessQuestions.includes(a.id))
      .reduce((sum, ans) => sum + ans.score, 0)
    
    const closednessType = closednessScore <= 40 ? 'growth' : 'fixed'
    
    // 3. 计算做功阻力
    questions.dimensions.main_dimensions.work_resistance
    const resistanceQuestions = questions.dimensions.main_dimensions.work_resistance
    const resistanceScore = answers
      .filter(a => resistanceQuestions.includes(a.id))
      .reduce((sum, ans) => sum + ans.score, 0)
    
    const resistanceType = resistanceScore <= 40 ? 'efficient' : 'consuming'
    
    // 4. 计算五维熵维
    const calculateDimensionScore = (questionIds) => {
      const sum = answers
        .filter(a => questionIds.includes(a.id))
        .reduce((sum, ans) => sum + ans.score, 0)
      return parseFloat((sum / questionIds.length).toFixed(2))
    }
    
    const radarData = [
      {
        name: '封闭性',
       
        value: calculateDimensionScore( questions.dimensions.closedness)
      },
      {
        name: '平衡态',
        value: calculateDimensionScore(questions.dimensions.balance)
      },
      {
        name: '高线性',
        value: calculateDimensionScore(questions.dimensions.linearity)
      },
      {
        name: '内心失序',
        value: calculateDimensionScore(questions.dimensions.disorder)
      },
      {
        name: '能量失焦',
        value: calculateDimensionScore(questions.dimensions.focus)
      }
    ]
    
    return {
      totalScore,
      entropyState,
      entropyPercentage,
      closednessScore,
      closednessType,
      resistanceScore,
      resistanceType,
      radarData
    }
  }