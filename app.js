'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors= require('cors');
const helmet = require('helmet');

const indexRouter = require('./routes/index-router');
const githubRouter = require('./routes/github-router');
const linkedinRouter = require('./routes/linkedin-router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(helmet());

app.use('/', indexRouter);
app.use('/github', githubRouter);
app.use('/linkedin', linkedinRouter);

module.exports = app;