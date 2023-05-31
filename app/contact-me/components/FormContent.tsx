'use client'

import { useForm } from '@/hooks/useForm'

export default function FormContent() {
  const { data } = useForm()

  return (
    <div>
      <div></div>
      <pre id="code" className="leading-relaxed">
        <code>
          <span className="line">
            <span className="line-inner">
              <span className="text-accent-lilac">const</span>{' '}
              <span className="text-accent-purple">button</span>
              <span className="text-accent-lilac"> = </span>
              <span className="text-accent-purple">document</span>.
              <span className="text-accent-purple">querySelector</span>(
              <span className="text-accent-orange">{`'#sendBtn'`}</span>);
            </span>
          </span>
          <span className="line"></span>
          <span className="line">
            <span className="line-inner">
              <span className="text-accent-lilac">const</span>{' '}
              <span className="text-accent-purple">message</span>
              <span className="text-accent-lilac"> = </span>
              {`{`}
            </span>
          </span>
          <span className="line">
            <span className="line-inner">
              <span className="text-accent-purple">&nbsp;&nbsp;name</span>
              {': '}
              <span className="text-accent-orange">{`'${data.name}'`}</span>,
            </span>
          </span>
          <span className="line">
            <span className="line-inner">
              <span className="text-accent-purple">&nbsp;&nbsp;email</span>
              {': '}
              <span className="text-accent-orange">{`'${data.email}'`}</span>,
            </span>
          </span>
          <span className="line">
            <span className="line-inner">
              <span className="text-accent-purple">&nbsp;&nbsp;message</span>
              {': '}
              <span className="text-accent-orange">{`'${data.message}'`}</span>
            </span>
          </span>
          <span className="line">
            <span className="inner-line">{`};`}</span>
          </span>
          {/* <span className="line">
            <span className="line-inner">
              <span className="text-accent-purple">&nbsp;&nbsp;date</span>
              {': '}
              <span className="text-accent-orange">{`'${data.date}'`}</span>,
            </span>
          </span> */}
          <span className="line"></span>
          <span className="line">
            <span className="line-inner">
              <span className="text-accent-purple">button</span>.
              <span className="text-accent-purple">addEventListener</span>(
              <span className="text-accent-orange">{`'click'`}</span>
              {`, () `}
              <span className="text-accent-lilac">{`=>`}</span> {`{ `}
            </span>
          </span>
          <span className="line">
            <span className="line-inner">
              &nbsp;&nbsp;<span className="text-accent-purple">form</span>.
              <span className="text-accent-purple">send</span>
              {`(`}
              <span className="text-accent-purple">message</span>
              {`)`}
            </span>
          </span>
          <span className="line">{`})`}</span>
        </code>
      </pre>
    </div>
  )
}
