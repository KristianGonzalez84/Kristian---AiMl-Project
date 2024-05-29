const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../models');
const Recipe = db.Recipe;
const { recommendRecipes } = require('../recommendations');

// Home route
router.get('/', (req, res) => {
  res.render('index');
});

// Recipes route
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.render('recipes', { recipes });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Recommend route
router.post('/recommend', async (req, res) => {
  try {
    const userPreferences = req.body;
    const recommendations = recommendRecipes(userPreferences);
    res.render('recommendations', { recommendations });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router