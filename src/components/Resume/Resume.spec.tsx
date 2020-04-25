import React from 'react'
import { PureContact as Contact } from './Contact'
import { PureEducation as Education } from './Education'
import { PureExperience as Experience } from './Experience'
import { PureHeading as Heading } from './Heading'
import { PureSkills as Skills } from './Skills'
import { SnapshotRenderer } from '../../helpers/testing'

describe('<Heading />', () => {
  const props = {
    name: ['foo', 'bar'],
    removeImage: true,
  }

  it('should match Heading snapshot', () => {
    const internalTree = SnapshotRenderer(<Heading {...props} />)

    expect(internalTree).toMatchSnapshot()
  })
})

describe('<Contact />', () => {
  const props = {
    contactItems: [
      {
        key: 'location',
        value: 'USA',
      },
      {
        href: `mailto:foo@foo.com`,
        key: 'email',
        value: 'foo@foo.com',
      },
      {
        key: 'website',
        value: 'this_site.com',
      },
    ],
    title: 'foo',
  }

  it('should match Contact snapshot', () => {
    const internalTree = SnapshotRenderer(<Contact {...props} />)

    expect(internalTree).toMatchSnapshot()
  })
})

describe('<Education />', () => {
  const props = {
    educationItems: [
      {
        title: 'Foo',
        subTitle: 'Bar',
        date: '2020',
      },
      {
        title: 'Bar',
        subTitle: 'Foo',
        date: '2020',
        note: 'Wu-Tang',
      },
    ],
    title: 'foo',
  }

  it('should match Education snapshot', () => {
    const internalTree = SnapshotRenderer(<Education {...props} />)

    expect(internalTree).toMatchSnapshot()
  })
})

describe('<Experience />', () => {
  const props = {
    experienceItems: [
      {
        title: 'foo',
        company: 'bar',
        href: 'foo.com',
        items: ['foo', 'bar'],
        date: `2020`,
      },
      {
        title: 'bar',
        company: 'foo',
        href: '/',
        date: `2020`,
      },
    ],
    title: 'experience',
  }

  it('should match Experience snapshot', () => {
    const internalTree = SnapshotRenderer(<Experience {...props} />)

    expect(internalTree).toMatchSnapshot()
  })
})

describe('<Skills />', () => {
  const props = {
    skillsItems: [
      {
        title: 'foo',
        value: 5,
      },
      {
        title: 'bar',
        value: 2,
      },
    ],
    title: 'skills',
  }

  it('should match Skills snapshot', () => {
    const internalTree = SnapshotRenderer(<Skills {...props} />)

    expect(internalTree).toMatchSnapshot()
  })
})
