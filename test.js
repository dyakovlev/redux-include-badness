import React from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { createStore } from 'redux'

const Hello = () => (<span>hello</span>)

const WrappedHello = connect()(NotificationArea)

render(
	<WrappedHello />
	, document.querySelector('.root')
)


