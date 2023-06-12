package com.example.alis_mobile

import android.animation.ObjectAnimator
import android.content.Intent
import android.os.Bundle
import android.graphics.Color

import androidx.activity.ComponentActivity
import android.widget.ImageView
import android.widget.Button
import android.widget.FrameLayout

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup

import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.content.ContextCompat


class AppActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_screen)

        val selected = ContextCompat.getColor(this, R.color.select_color)

        val inflater = LayoutInflater.from(this)

        val currLayout = findViewById<FrameLayout>(R.id.contentView)

        val homeNav = findViewById<ImageView>(R.id.homeNav)
        val exploreNav = findViewById<ImageView>(R.id.exploreNav)
        val bookNav = findViewById<ImageView>(R.id.bookNav)

        val selectHome = findViewById<View>(R.id.selectHome)
        val selectExplore = findViewById<View>(R.id.selectExplore)
        val selectBook = findViewById<View>(R.id.selectBook)

        var profileScreen: View? = null
        val selectHamburger = findViewById<View>(R.id.hamburger)

        // PROFILE WITH ANIMATION

        selectHamburger.setOnClickListener {
            profileScreen = inflater.inflate(R.layout.profile_screen, null)
            // Set the initial position of the profileLayout outside the left edge of the screen
            profileScreen?.let { screen ->
                screen.translationX = -(screen.width?.toFloat() ?: 0f)
            }

            val closeButton = profileScreen?.findViewById<ImageView>(R.id.close_button)
            closeButton?.setOnClickListener {
                profileScreen?.let { screen ->
                    val animator = ObjectAnimator.ofFloat(
                        screen,
                        "translationX",
                        screen.translationX,
                        -screen.width.toFloat()
                    )
                    animator.duration = 500

                    animator.start()
                }
            }

            val rootView = window.decorView.findViewById<ViewGroup>(android.R.id.content)
            rootView.addView(profileScreen)
            profileScreen?.post {
                val animator = ObjectAnimator.ofFloat(
                    profileScreen,
                    "translationX",
                    -profileScreen!!.width.toFloat(),
                    0f
                )
                animator.duration = 500

                animator.start()
            }
        }

        // HOME BRANCH

        homeNav.setOnClickListener {
            selectHome.setBackgroundColor(selected)
            selectExplore.setBackgroundColor(Color.TRANSPARENT)
            selectBook.setBackgroundColor(Color.TRANSPARENT)
            currLayout.removeAllViews()
            val newView = inflater.inflate(R.layout.rule_screen, currLayout, false)
            currLayout.addView(newView)
        }

        //EXPLORE BRANCH

        exploreNav.setOnClickListener {
            selectHome.setBackgroundColor(Color.TRANSPARENT)
            selectExplore.setBackgroundColor(selected)
            selectBook.setBackgroundColor(Color.TRANSPARENT)
            currLayout.removeAllViews()
            val newView = inflater.inflate(R.layout.cataloging_screen_home, currLayout, false)
            currLayout.addView(newView)
        }

        // BOOK MENU BRANCH

        bookNav.setOnClickListener {
            selectHome.setBackgroundColor(Color.TRANSPARENT)
            selectExplore.setBackgroundColor(Color.TRANSPARENT)
            selectBook.setBackgroundColor(selected)
            currLayout.removeAllViews()
            val searchedView = inflater.inflate(R.layout.searched_screen, currLayout, false)
            currLayout.addView(searchedView)

            val bookClick = searchedView.findViewById<ConstraintLayout>(R.id.book_card_circulation_screen)
            bookClick.setOnClickListener {
                currLayout.removeAllViews()
                val newView = inflater.inflate(R.layout.book_information_availability, currLayout, false)
                currLayout.addView(newView)

                val bckButton = newView.findViewById<Button>(R.id.back_btn_book_information_availability)
                val naviButton = newView.findViewById<Button>(R.id.navigate_btn_book_information_availability)

                bckButton.setOnClickListener {
                    currLayout.removeAllViews()
                    val searchedView = inflater.inflate(R.layout.searched_screen, currLayout, false)
                    currLayout.addView(searchedView)
                }

                naviButton.setOnClickListener {
                    currLayout.removeAllViews()
                    val navigateView = inflater.inflate(R.layout.navigate_screen, currLayout, false)
                    currLayout.addView(navigateView)
                }
            }
            // setClickListeners(searchedView)
        }
    }

    private fun switchDestinationLogin() {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
    }

    /*private fun setClickListeners(searchedView: View) {
        val bckButton = searchedView.findViewById<Button>(R.id.back_btn_book_information_availability)
        val naviButton = searchedView.findViewById<Button>(R.id.navigate_btn_book_information_availability)
        val inflater = LayoutInflater.from(this)
        val currLayout = findViewById<FrameLayout>(R.id.contentView)

        val backClickListener = View.OnClickListener {
            currLayout.removeAllViews()
            val searchedView = inflater.inflate(R.layout.searched_screen, currLayout, false)
            currLayout.addView(searchedView)
        }
        bckButton.setOnClickListener(backClickListener)

        val navigateClickListener = View.OnClickListener {
            currLayout.removeAllViews()
            val navigateView = inflater.inflate(R.layout.navigate_screen, currLayout, false)
            currLayout.addView(navigateView)
        }
        naviButton.setOnClickListener(navigateClickListener)
    }*/

}