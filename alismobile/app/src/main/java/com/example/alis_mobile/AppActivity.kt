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
import android.widget.TextView

import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.content.ContextCompat
import com.example.alis_mobile.session.Session


class AppActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_screen)

        val selected = ContextCompat.getColor(this, R.color.select_color)

        val inflater = LayoutInflater.from(this)

        val currLayout = findViewById<FrameLayout>(R.id.contentView)

        val currSect = findViewById<TextView>(R.id.currsection)

        val homeNav = findViewById<ImageView>(R.id.homeNav)
        val exploreNav = findViewById<ImageView>(R.id.exploreNav)
        val bookNav = findViewById<ImageView>(R.id.bookNav)

        val selectHome = findViewById<View>(R.id.selectHome)
        val selectExplore = findViewById<View>(R.id.selectExplore)
        val selectBook = findViewById<View>(R.id.selectBook)

        val profileScreen: View? = inflater.inflate(R.layout.profile_screen, null)

        val selectHamburger = findViewById<View>(R.id.hamburger)

        val rootView = window.decorView.findViewById<ViewGroup>(android.R.id.content)
        profileScreen?.visibility = View.INVISIBLE // to avoid flicker
        rootView.addView(profileScreen)


        // PROFILE WITH ANIMATION

        selectHamburger.setOnClickListener {
            selectHamburger.isClickable = false
            // Set the initial position of the profileLayout outside the left edge of the screen
            profileScreen?.let { screen ->
                screen.translationX = -(screen.width.toFloat())
            }
            profileScreen?.post {
                val animator = ObjectAnimator.ofFloat(
                    profileScreen,
                    "translationX",
                    -profileScreen!!.width.toFloat(),
                    0f
                )
                profileScreen?.visibility = View.VISIBLE
                animator.duration = 500

                animator.start()
            }

            val closeButton = profileScreen?.findViewById<ImageView>(R.id.close_button)
            closeButton?.setOnClickListener {
                selectHamburger.isClickable = true
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
        }

        // HOME BRANCH

        homeNav.setOnClickListener {
            selectHome.setBackgroundColor(selected)
            selectExplore.setBackgroundColor(Color.TRANSPARENT)
            selectBook.setBackgroundColor(Color.TRANSPARENT)
            currLayout.removeAllViews()
            val newView = inflater.inflate(R.layout.rule_screen, currLayout, false)
            currLayout.addView(newView)

            currSect.text = "Home"
        }

        //EXPLORE BRANCH

        exploreNav.setOnClickListener {
            selectHome.setBackgroundColor(Color.TRANSPARENT)
            selectExplore.setBackgroundColor(selected)
            selectBook.setBackgroundColor(Color.TRANSPARENT)
            currLayout.removeAllViews()
            val newView = inflater.inflate(R.layout.cataloging_screen_home, currLayout, false)
            currLayout.addView(newView)

            currSect.text = "Cataloging"
        }

        // BOOK MENU BRANCH

        bookNav.setOnClickListener {
            selectHome.setBackgroundColor(Color.TRANSPARENT)
            selectExplore.setBackgroundColor(Color.TRANSPARENT)
            selectBook.setBackgroundColor(selected)
            currLayout.removeAllViews()
            val searchedView = inflater.inflate(R.layout.searched_screen, currLayout, false)
            currLayout.addView(searchedView)

            currSect.text = "Book Transaction"

            val bookClick = searchedView.findViewById<ConstraintLayout>(R.id.book_card_circulation_screen)
            bookClick.setOnClickListener {
                currLayout.removeAllViews()
                val newView = inflater.inflate(R.layout.book_information_availability, currLayout, false)
                currLayout.addView(newView)

                val bckButton = newView.findViewById<Button>(R.id.back_btn_book_information_availability)
                val naviButton = newView.findViewById<Button>(R.id.navigate_btn_book_information_availability)

                bckButton.setOnClickListener {
                    currLayout.removeAllViews()
                    setClickListeners()
                }

                naviButton.setOnClickListener {
                    currSect.text = "Navigation"
                    currLayout.removeAllViews()
                    val navigateView = inflater.inflate(R.layout.navigate_screen, currLayout, false)
                    currLayout.addView(navigateView)
                }
            }
        }

        profileScreen?.let {
            updateProfileTexts(it)
            val logoutButton = it.findViewById<Button>(R.id.log_out_btn)
            logoutButton.setOnClickListener {
                Session.getInstance().logout()
                val intent = Intent(this, MainActivity::class.java)
                startActivity(intent)
            }
        }

    }

    private fun updateProfileTexts(profileView: View){

        val nameField = profileView.findViewById<TextView>(R.id.input_name)
        val accNumberField = profileView.findViewById<TextView>(R.id.account_number)
        val courseField = profileView.findViewById<TextView>(R.id.course)
        val numberField = profileView.findViewById<TextView>(R.id.number)
        val emailField = profileView.findViewById<TextView>(R.id.textView12)

        val user = Session.getInstance().user

        nameField.text = "${user?.optString("first_name") ?: "Null"} ${user?.optString("middle_name") ?: "Null"} ${user?.optString("last_name") ?: "Null"}"
        accNumberField.text = user?.optString("id") ?: "Null"
        courseField.text = "Wala pang course field sa DB"
        numberField.text = "Wala pang number field sa DB"
        emailField.text = user?.optString("email") ?: "Null"

    }

    private fun setClickListeners() {
        val currLayout = findViewById<FrameLayout>(R.id.contentView)
        val inflater = LayoutInflater.from(this)

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
    }


}