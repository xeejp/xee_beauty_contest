defmodule Beauty.Participant do
  alias Beauty.Actions
  alias Beauty.Host

  # Actions
  def fetch_contents(data, id) do
     if data.page == "waiting", do: data = data |> put_in([:participants, id, :active], true)
    Actions.update_participant_contents(data, id)
  end

  def input(data, id, number)do
	inputs = get_in(data, [:inputs])
	inputs = inputs + 1
  	data = data
		|> put_in([:participants, id ,:inputed], true)
		|> put_in([:participants, id ,:number], number)
		|> put_in([:inputs], inputs)
		|> put_in([:sum], data.sum+number)
	Actions.input(data, id)
  end

  def update_input(data,id) do
       inputs =  get_in(data, [:inputs])
       actives = get_in(data, [:actives])
       if(inputs == actives) do
          data = data
	         |> put_in([:page],"result")
          Host.change_page(data,"result")
	  else
	  data = data |>Map.put(:participants,Enum.into(Enum.map(data.participants, fn { id, _} ->
             {id,
                 %{
	            active: data.participants[id].active,
	            number: data.participants[id].number,
	            inputed: data.participants[id].inputed,
	            inputs: inputs,
		    actives: actives,
	          }
             }
          end), %{}))

	  data
	  |> Actions.updata_input(inputs, actives)
       end
   end

          

  # Utilities

  def format_participant(participant), do: participant

  def format_data(data) do
    %{
      page: data.page,
    }
  end

  def format_contents(data, id) do
    %{participants: participants} = data
    participant = Map.get(participants, id)
    format_participant(participant)
    |> Map.merge(format_data(data))
  end
end
