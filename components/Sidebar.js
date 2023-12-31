import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="col-md-4 blog-sidebar">
        <div className="p-3 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-2">Connor S. McCarl is an expert <em>Multifamily Real Estate Investor</em> that specializes in apartment buildings with 100+ units. He offers his investors great risk-adjusted returns to help round out their portfolios.</p>
            <Link href='/about'>
                Read More
            </Link>
        </div>

        <div className="p-3">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
            <li><a href="#">March 2014</a></li>
            <li><a href="#">February 2014</a></li>
            <li><a href="#">January 2014</a></li>
            <li><a href="#">December 2013</a></li>
            <li><a href="#">November 2013</a></li>
            <li><a href="#">October 2013</a></li>
            <li><a href="#">September 2013</a></li>
            <li><a href="#">August 2013</a></li>
            <li><a href="#">July 2013</a></li>
            <li><a href="#">June 2013</a></li>
            <li><a href="#">May 2013</a></li>
            <li><a href="#">April 2013</a></li>
            </ol>
        </div>

        <div className="p-3">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            </ol>
        </div>
    </aside>
  )
}
