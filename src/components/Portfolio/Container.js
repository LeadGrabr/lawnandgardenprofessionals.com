import React from 'react'
import { TopBar, Page, Portfolio, PrimaryNav } from 'components'
import Helmet from 'react-helmet'

const PortfolioContainer = () =>
    <Page>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: 'Benjamin Tatum professional sotware development website portfolio'
                },
            ]}
            title="Portfolio"
        />
        <TopBar nav={<PrimaryNav/>}/>
        <Page.Title>
            Work, Work, Work,<br/>
            Work, Work
        </Page.Title>
        <Page.Content>
            <Portfolio/>
        </Page.Content>
    </Page>

export default PortfolioContainer
